import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import db from '../../utils/database.js';
import { REPORT_STEPS, COLORS } from '../../utils/constants.js';

export default {
  data: new SlashCommandBuilder()
    .setName('rapor')
    .setDescription('FTO rapor işlemleri')
    .addSubcommand(subcommand =>
      subcommand
        .setName('baslat')
        .setDescription('Yeni bir FTO raporu başlat')
        .addUserOption(option =>
          option
            .setName('fts')
            .setDescription('Değerlendirilecek stajyer')
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('iptal')
        .setDescription('Devam eden raporu iptal et')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('devam')
        .setDescription('Yarım kalan raporu kaldığı yerden devam ettir')
    ),

  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();

    // FTO rolü kontrolü
    if (!await checkFTOPermission(interaction)) {
      return interaction.reply({
        content: '❌ Bu komutu kullanmak için FTO rolüne sahip olmalısın!',
        ephemeral: true
      });
    }

    if (subcommand === 'baslat') {
      return handleRaporBaslat(interaction);
    }

    if (subcommand === 'iptal') {
      return handleRaporIptal(interaction);
    }

    if (subcommand === 'devam') {
      return handleRaporDevam(interaction);
    }
  }
};

async function checkFTOPermission(interaction) {
  const settings = db.getGuildSettings(interaction.guild.id);
  
  if (!settings.ftoRole) {
    await interaction.reply({
      content: '❌ FTO rolü ayarlanmamış! Lütfen bir yönetici `/kurulum fto_rol ayarla` komutunu kullansın.',
      ephemeral: true
    });
    return false;
  }

  const member = await interaction.guild.members.fetch(interaction.user.id);
  return member.roles.cache.has(settings.ftoRole);
}

async function handleRaporBaslat(interaction) {
  const fts = interaction.options.getUser('fts');

  // Log kanalı kontrolü
  const settings = db.getGuildSettings(interaction.guild.id);
  if (!settings.logChannel) {
    return interaction.reply({
      content: '❌ Log kanalı ayarlanmamış! Lütfen bir yönetici `/kurulum log_kanal ayarla` komutunu kullansın.',
      ephemeral: true
    });
  }

  // Aktif session kontrolü
  if (db.hasActiveSession(interaction.user.id)) {
    return interaction.reply({
      content: '❌ Zaten devam eden bir raporun var! Önce `/rapor iptal` ile iptal et veya `/rapor devam` ile devam ettir.',
      ephemeral: true
    });
  }

  // Yeni session oluştur
  db.createSession(interaction.user.id, fts.id);

  // İlk soruyu sor
  const firstStep = REPORT_STEPS[0];
  const embed = new EmbedBuilder()
    .setColor(COLORS.INFO)
    .setTitle('📝 FTO Raporu Başlatıldı')
    .setDescription(`${fts} için rapor doldurma başladı.\n\n${firstStep.question}`)
    .addFields(
      { name: '👤 Değerlendirilecek', value: `${fts.tag}`, inline: true },
      { name: '👮 Değerlendiren', value: `${interaction.user.tag}`, inline: true }
    )
    .setFooter({ text: `Adım 1/${REPORT_STEPS.length} • İptal etmek için: !iptal` })
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}

async function handleRaporIptal(interaction) {
  if (!db.hasActiveSession(interaction.user.id)) {
    return interaction.reply({
      content: '❌ Devam eden bir raporun yok!',
      ephemeral: true
    });
  }

  db.deleteSession(interaction.user.id);

  const embed = new EmbedBuilder()
    .setColor(COLORS.WARNING)
    .setTitle('🗑️ Rapor İptal Edildi')
    .setDescription('Devam eden rapor başarıyla iptal edildi.')
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}

async function handleRaporDevam(interaction) {
  const session = db.getSession(interaction.user.id);

  if (!session) {
    return interaction.reply({
      content: '❌ Devam eden bir raporun yok!',
      ephemeral: true
    });
  }

  const currentStep = REPORT_STEPS[session.step];
  const fts = await interaction.guild.members.fetch(session.ftsId).catch(() => null);

  if (!fts) {
    db.deleteSession(interaction.user.id);
    return interaction.reply({
      content: '❌ FTS bulunamadı! Rapor iptal edildi.',
      ephemeral: true
    });
  }

  const embed = new EmbedBuilder()
    .setColor(COLORS.INFO)
    .setTitle('📝 Rapor Devam Ediyor')
    .setDescription(`${fts.user.tag} için rapor doldurma devam ediyor.\n\n${currentStep.question}`)
    .addFields(
      { name: '👤 Değerlendirilecek', value: `${fts.user.tag}`, inline: true },
      { name: '👮 Değerlendiren', value: `${interaction.user.tag}`, inline: true }
    )
    .setFooter({ text: `Adım ${session.step + 1}/${REPORT_STEPS.length} • İptal etmek için: !iptal` })
    .setTimestamp();

  // Daha önce doldurulmuş alanları göster
  const filledFields = [];
  for (let i = 0; i < session.step; i++) {
    const step = REPORT_STEPS[i];
    const value = session.answers[step.field];
    if (value !== null) {
      if (step.field === 'not') {
        filledFields.push(`✅ **${step.displayName}:** ${value}`);
      } else {
        filledFields.push(`✅ **${step.displayName}:** ${value}/10`);
      }
    } else {
      filledFields.push(`✅ **${step.displayName}:** —`);
    }
  }

  if (filledFields.length > 0) {
    embed.addFields({
      name: '📋 Doldurulmuş Alanlar',
      value: filledFields.join('\n')
    });
  }

  await interaction.reply({ embeds: [embed] });
}
