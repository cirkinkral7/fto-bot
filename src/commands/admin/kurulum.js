import { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } from 'discord.js';
import db from '../../utils/database.js';
import { COLORS } from '../../utils/constants.js';

export default {
  data: new SlashCommandBuilder()
    .setName('kurulum')
    .setDescription('Bot ayarlarını yapılandır')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommandGroup(group =>
      group
        .setName('log_kanal')
        .setDescription('Log kanalı ayarları')
        .addSubcommand(subcommand =>
          subcommand
            .setName('ayarla')
            .setDescription('FTO raporlarının gönderileceği log kanalını ayarla')
            .addChannelOption(option =>
              option
                .setName('kanal')
                .setDescription('Log kanalı')
                .setRequired(true)
            )
        )
    )
    .addSubcommandGroup(group =>
      group
        .setName('fto_rol')
        .setDescription('FTO rolü ayarları')
        .addSubcommand(subcommand =>
          subcommand
            .setName('ayarla')
            .setDescription('Rapor komutlarını kullanabilecek FTO rolünü ayarla')
            .addRoleOption(option =>
              option
                .setName('rol')
                .setDescription('FTO rolü')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand =>
          subcommand
            .setName('ver')
            .setDescription('Bir kullanıcıya FTO rolü ver')
            .addUserOption(option =>
              option
                .setName('kullanici')
                .setDescription('FTO rolü verilecek kullanıcı')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand =>
          subcommand
            .setName('al')
            .setDescription('Bir kullanıcıdan FTO rolünü al')
            .addUserOption(option =>
              option
                .setName('kullanici')
                .setDescription('FTO rolü alınacak kullanıcı')
                .setRequired(true)
            )
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('ayarlar')
        .setDescription('Mevcut bot ayarlarını göster')
    ),

  async execute(interaction) {
    const group = interaction.options.getSubcommandGroup();
    const subcommand = interaction.options.getSubcommand();

    if (group === 'log_kanal' && subcommand === 'ayarla') {
      return handleLogChannelSet(interaction);
    }

    if (group === 'fto_rol') {
      if (subcommand === 'ayarla') {
        return handleFTORoleSet(interaction);
      }
      if (subcommand === 'ver') {
        return handleFTORoleGive(interaction);
      }
      if (subcommand === 'al') {
        return handleFTORoleTake(interaction);
      }
    }

    if (subcommand === 'ayarlar') {
      return handleShowSettings(interaction);
    }
  }
};

async function handleLogChannelSet(interaction) {
  const channel = interaction.options.getChannel('kanal');
  
  if (!channel.isTextBased()) {
    return interaction.reply({
      content: '❌ Lütfen bir metin kanalı seçin!',
      ephemeral: true
    });
  }

  db.setLogChannel(interaction.guild.id, channel.id);

  const embed = new EmbedBuilder()
    .setColor(COLORS.SUCCESS)
    .setTitle('✅ Log Kanalı Ayarlandı')
    .setDescription(`FTO raporları artık ${channel} kanalına gönderilecek.`)
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}

async function handleFTORoleSet(interaction) {
  const role = interaction.options.getRole('rol');

  db.setFTORole(interaction.guild.id, role.id);

  const embed = new EmbedBuilder()
    .setColor(COLORS.SUCCESS)
    .setTitle('✅ FTO Rolü Ayarlandı')
    .setDescription(`${role} rolüne sahip kullanıcılar artık rapor komutlarını kullanabilir.`)
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}

async function handleFTORoleGive(interaction) {
  const user = interaction.options.getUser('kullanici');
  const settings = db.getGuildSettings(interaction.guild.id);

  if (!settings.ftoRole) {
    return interaction.reply({
      content: '❌ Önce `/kurulum fto_rol ayarla` komutu ile FTO rolünü ayarlayın!',
      ephemeral: true
    });
  }

  const member = await interaction.guild.members.fetch(user.id).catch(() => null);
  
  if (!member) {
    return interaction.reply({
      content: '❌ Kullanıcı bulunamadı!',
      ephemeral: true
    });
  }

  const role = interaction.guild.roles.cache.get(settings.ftoRole);
  
  if (!role) {
    return interaction.reply({
      content: '❌ FTO rolü bulunamadı! Lütfen rolü tekrar ayarlayın.',
      ephemeral: true
    });
  }

  if (member.roles.cache.has(role.id)) {
    return interaction.reply({
      content: `❌ ${user} zaten ${role} rolüne sahip!`,
      ephemeral: true
    });
  }

  await member.roles.add(role);

  const embed = new EmbedBuilder()
    .setColor(COLORS.SUCCESS)
    .setTitle('✅ FTO Rolü Verildi')
    .setDescription(`${user} kullanıcısına ${role} rolü verildi.`)
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}

async function handleFTORoleTake(interaction) {
  const user = interaction.options.getUser('kullanici');
  const settings = db.getGuildSettings(interaction.guild.id);

  if (!settings.ftoRole) {
    return interaction.reply({
      content: '❌ Önce `/kurulum fto_rol ayarla` komutu ile FTO rolünü ayarlayın!',
      ephemeral: true
    });
  }

  const member = await interaction.guild.members.fetch(user.id).catch(() => null);
  
  if (!member) {
    return interaction.reply({
      content: '❌ Kullanıcı bulunamadı!',
      ephemeral: true
    });
  }

  const role = interaction.guild.roles.cache.get(settings.ftoRole);
  
  if (!role) {
    return interaction.reply({
      content: '❌ FTO rolü bulunamadı! Lütfen rolü tekrar ayarlayın.',
      ephemeral: true
    });
  }

  if (!member.roles.cache.has(role.id)) {
    return interaction.reply({
      content: `❌ ${user} zaten ${role} rolüne sahip değil!`,
      ephemeral: true
    });
  }

  await member.roles.remove(role);

  const embed = new EmbedBuilder()
    .setColor(COLORS.SUCCESS)
    .setTitle('✅ FTO Rolü Alındı')
    .setDescription(`${user} kullanıcısından ${role} rolü alındı.`)
    .setTimestamp();

  await interaction.reply({ embeds: [embed] });
}

async function handleShowSettings(interaction) {
  const settings = db.getGuildSettings(interaction.guild.id);

  const logChannel = settings.logChannel 
    ? `<#${settings.logChannel}>` 
    : '❌ Ayarlanmamış';

  const ftoRole = settings.ftoRole 
    ? `<@&${settings.ftoRole}>` 
    : '❌ Ayarlanmamış';

  const embed = new EmbedBuilder()
    .setColor(COLORS.INFO)
    .setTitle('⚙️ Bot Ayarları')
    .addFields(
      { name: '📝 Log Kanalı', value: logChannel, inline: true },
      { name: '👮 FTO Rolü', value: ftoRole, inline: true }
    )
    .setTimestamp()
    .setFooter({ text: interaction.guild.name });

  await interaction.reply({ embeds: [embed] });
}
