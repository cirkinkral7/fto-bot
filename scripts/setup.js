import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔧 FTO Bot Kurulum Başlatılıyor...\n');

// Data klasörünü oluştur
const dataDir = join(__dirname, '../data');
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
  console.log('✅ data/ klasörü oluşturuldu');
} else {
  console.log('✓ data/ klasörü zaten mevcut');
}

// Database.json oluştur
const dbPath = join(dataDir, 'database.json');
if (!existsSync(dbPath)) {
  const defaultData = {
    guilds: {},
    sessions: {}
  };
  writeFileSync(dbPath, JSON.stringify(defaultData, null, 2));
  console.log('✅ database.json oluşturuldu');
} else {
  console.log('✓ database.json zaten mevcut');
}

console.log('\n✅ Kurulum tamamlandı!');
console.log('\n📝 Sonraki adımlar:');
console.log('1. config.js dosyasını düzenle (token, clientId, guildId)');
console.log('2. npm install');
console.log('3. node scripts/deploy-commands.js');
console.log('4. npm start\n');
