import { REST, Routes } from 'discord.js';
import config from '../config.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdirSync } from 'fs';
import { pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const commands = [];
const commandsPath = join(__dirname, '../src/commands');
const commandFolders = readdirSync(commandsPath);

for (const folder of commandFolders) {
  const commandFiles = readdirSync(join(commandsPath, folder)).filter(file => file.endsWith('.js'));
  
  for (const file of commandFiles) {
    const filePath = join(commandsPath, folder, file);
    const fileURL = pathToFileURL(filePath).href;
    const command = await import(fileURL);
    
    if ('data' in command.default && 'execute' in command.default) {
      commands.push(command.default.data.toJSON());
      console.log(`✅ Komut hazırlandı: ${command.default.data.name}`);
    } else {
      console.log(`⚠️ Uyarı: ${file} geçerli bir komut değil.`);
    }
  }
}

const rest = new REST().setToken(config.token);

(async () => {
  try {
    console.log(`\n🔄 ${commands.length} komut Discord'a kaydediliyor...`);

    const data = await rest.put(
      Routes.applicationGuildCommands(config.clientId, config.guildId),
      { body: commands },
    );

    console.log(`✅ ${data.length} komut başarıyla kaydedildi!`);
    
    console.log('\n📋 Kayıtlı komutlar:');
    data.forEach(cmd => console.log(`   - /${cmd.name}`));
    
  } catch (error) {
    console.error('❌ Komut kaydetme hatası:', error);
  }
})();
