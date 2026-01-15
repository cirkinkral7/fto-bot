import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DATA_DIR = join(__dirname, '../../data');
const DB_PATH = join(DATA_DIR, 'database.json');

// Data klasörünü oluştur (yoksa)
if (!existsSync(DATA_DIR)) {
  mkdirSync(DATA_DIR, { recursive: true });
}

class Database {
  constructor() {
    this.data = this.load();
  }

  load() {
    try {
      if (existsSync(DB_PATH)) {
        const data = readFileSync(DB_PATH, 'utf8');
        return JSON.parse(data);
      } else {
        // Database yoksa oluştur
        console.log('⚠️ Database dosyası bulunamadı, yeni oluşturuluyor...');
        const defaultData = {
          guilds: {},
          sessions: {}
        };
        writeFileSync(DB_PATH, JSON.stringify(defaultData, null, 2));
        console.log('✅ Database oluşturuldu:', DB_PATH);
        return defaultData;
      }
    } catch (error) {
      console.error('Database yükleme hatası:', error);
      return {
        guilds: {},
        sessions: {}
      };
    }
  }

  save() {
    try {
      writeFileSync(DB_PATH, JSON.stringify(this.data, null, 2));
    } catch (error) {
      console.error('Database kaydetme hatası:', error);
    }
  }

  // Guild ayarları
  getGuildSettings(guildId) {
    if (!this.data.guilds[guildId]) {
      this.data.guilds[guildId] = {
        logChannel: null,
        ftoRole: null
      };
    }
    return this.data.guilds[guildId];
  }

  setLogChannel(guildId, channelId) {
    const settings = this.getGuildSettings(guildId);
    settings.logChannel = channelId;
    this.save();
  }

  setFTORole(guildId, roleId) {
    const settings = this.getGuildSettings(guildId);
    settings.ftoRole = roleId;
    this.save();
  }

  // Session yönetimi
  createSession(userId, ftsId) {
    this.data.sessions[userId] = {
      ftsId: ftsId,
      step: 0,
      answers: {
        kodBilgisi: null,
        mirandaHaklari: null,
        pullOver: null,
        felonyStop: null,
        telsizKullanimi: null,
        iletisim: null,
        taser: null,
        not: null
      },
      timestamp: Date.now()
    };
    this.save();
  }

  getSession(userId) {
    return this.data.sessions[userId] || null;
  }

  updateSessionStep(userId, step) {
    if (this.data.sessions[userId]) {
      this.data.sessions[userId].step = step;
      this.save();
    }
  }

  updateSessionAnswer(userId, field, value) {
    if (this.data.sessions[userId]) {
      this.data.sessions[userId].answers[field] = value;
      this.save();
    }
  }

  deleteSession(userId) {
    delete this.data.sessions[userId];
    this.save();
  }

  hasActiveSession(userId) {
    return !!this.data.sessions[userId];
  }
}

export default new Database();
