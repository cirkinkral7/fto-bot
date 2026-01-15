import { Events, EmbedBuilder } from 'discord.js';
import db from '../utils/database.js';
import { REPORT_STEPS, COLORS } from '../utils/constants.js';

export default {
  name: Events.MessageCreate,
  async execute(message) {
    // Bot mesajlarını ve DM'leri yoksay
    if (message.author.bot || !message.guild) return;

    const session = db.getSession(message.author.id);
    
    // Aktif session yoksa devam etme
    if (!session) return;

    const content = message.content.trim().toLowerCase();
    const currentStep = REPORT_STEPS[session.step];

    // İptal komutu kontrolü
    if (content === '!iptal') {
      db.deleteSession(message.author.id);
      return message.reply('❌ Rapor doldurma işlemi iptal edildi.');
    }

    // Adım kontrolü
    if (!currentStep) return;

    let value = null;

    // Not alanı mı?
    if (currentStep.field === 'not') {
      if (content === 'gec') {
        value = null;
      } else {
        value = message.content.trim();
      }
    } else {
      // Puan alanları
      if (content === 'gec') {
        value = null;
      } else {
        const score = parseInt(content);
        
        if (isNaN(score) || score < 0 || score > 10) {
          return message.reply('❌ Lütfen 0-10 arasında bir sayı girin veya `gec` yazın.');
        }
        
        value = score;
      }
    }

    // Cevabı kaydet
    db.updateSessionAnswer(message.author.id, currentStep.field, value);

    // Sonraki adıma geç
    const nextStep = session.step + 1;
    
    if (nextStep < REPORT_STEPS.length) {
      // Daha adım var, soruyu sor
      db.updateSessionStep(message.author.id, nextStep);
      
      const nextQuestion = REPORT_STEPS[nextStep];
      const embed = new EmbedBuilder()
        .setColor(COLORS.INFO)
        .setTitle(`📝 FTO Raporu - Adım ${nextStep + 1}/${REPORT_STEPS.length}`)
        .setDescription(nextQuestion.question)
        .setFooter({ text: 'İptal etmek için: !iptal' });
      
      await message.reply({ embeds: [embed] });
    } else {
      // Rapor tamamlandı
      await finalizeReport(message, session);
    }
  }
};

async function finalizeReport(message, session) {
  const settings = db.getGuildSettings(message.guild.id);
  
  if (!settings.logChannel) {
    db.deleteSession(message.author.id);
    return message.reply('❌ Log kanalı ayarlanmamış! Rapor kaydedilemedi.');
  }

  const logChannel = message.guild.channels.cache.get(settings.logChannel);
  
  if (!logChannel) {
    db.deleteSession(message.author.id);
    return message.reply('❌ Log kanalı bulunamadı! Rapor kaydedilemedi.');
  }

  const fts = await message.guild.members.fetch(session.ftsId).catch(() => null);
  
  if (!fts) {
    db.deleteSession(message.author.id);
    return message.reply('❌ FTS bulunamadı!');
  }

  // Rapor embed'i oluştur
  const embed = new EmbedBuilder()
    .setColor(COLORS.SUCCESS)
    .setTitle('📋 FTO Raporu')
    .setThumbnail(fts.user.displayAvatarURL())
    .addFields(
      { 
        name: '👤 Değerlendirilen', 
        value: `${fts.user.tag} (${fts})`, 
        inline: true 
      },
      { 
        name: '👮 Değerlendiren', 
        value: `${message.author.tag} (${message.author})`, 
        inline: true 
      },
      { name: '\u200B', value: '\u200B' },
      { 
        name: '📊 Kod Bilgisi', 
        value: formatScore(session.answers.kodBilgisi), 
        inline: true 
      },
      { 
        name: '⚖️ Miranda Haklarına Dair Bilgi', 
        value: formatScore(session.answers.mirandaHaklari), 
        inline: true 
      },
      { 
        name: '🚔 Pull Over Bilgisi', 
        value: formatScore(session.answers.pullOver), 
        inline: true 
      },
      { 
        name: '🔫 Felony Stop Bilgisi', 
        value: formatScore(session.answers.felonyStop), 
        inline: true 
      },
      { 
        name: '📻 Telsiz Kullanımı', 
        value: formatScore(session.answers.telsizKullanimi), 
        inline: true 
      },
      { 
        name: '💬 İnsanlar Arası İletişim', 
        value: formatScore(session.answers.iletisim), 
        inline: true 
      },
      { 
        name: '⚡ Taser Bilgisi', 
        value: formatScore(session.answers.taser), 
        inline: true 
      }
    )
    .setTimestamp()
    .setFooter({ text: `Rapor ID: ${session.timestamp}` });

  // Not varsa ekle
  if (session.answers.not) {
    embed.addFields({ 
      name: '📝 Notlar', 
      value: session.answers.not 
    });
  }

  // Log kanalına gönder
  await logChannel.send({
    content: `${message.author} stajyerimiz ${fts} için FTO raporu bu şekildedir. Arz ederim...`,
    embeds: [embed]
  });

  // Session'ı sil
  db.deleteSession(message.author.id);

  // Onay mesajı
  await message.reply({
    embeds: [
      new EmbedBuilder()
        .setColor(COLORS.SUCCESS)
        .setTitle('✅ Rapor Tamamlandı!')
        .setDescription(`${fts} için FTO raporu başarıyla kaydedildi ve log kanalına gönderildi.`)
    ]
  });
}

function formatScore(score) {
  if (score === null) return '—';
  return `${score}/10`;
}
