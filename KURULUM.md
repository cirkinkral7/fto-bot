# ⚡ Hızlı Kurulum Kılavuzu

## 1️⃣ İlk Kurulum (Sadece Bir Kez)

### Adım 1: Discord Bot Oluştur
1. https://discord.com/developers/applications adresine git
2. "New Application" → İsim ver → "Create"
3. Sol menüden **"Bot"** → "Reset Token" → Token'ı kopyala
4. Aşağı kaydır → **"MESSAGE CONTENT INTENT"** ✅ AÇ
5. "Save Changes"
6. Sol menüden **"OAuth2"** → "URL Generator"
   - Scopes: `bot` + `applications.commands`
   - Bot Permissions: `Administrator` (veya gerekli izinler)
7. Oluşan URL'yi kopyala ve sunucuna ekle

### Adım 2: Bot Bilgilerini Al
- **Application ID**: General Information sayfasında
- **Guild ID**: Discord'da sunucuna sağ tık → "Copy Server ID" (Developer Mode açık olmalı)

### Adım 3: Proje Kurulumu

```bash
# 1. Projeyi aç
cd fto-bot

# 2. config.js dosyasını düzenle
# Token, clientId ve guildId'yi yapıştır

# 3. Paketleri yükle
npm install

# 4. Klasörleri oluştur (otomatik)
npm run setup

# 5. Komutları Discord'a kaydet
npm run deploy

# 6. Botu başlat
npm start
```

## 2️⃣ Bot Sunucuda Çalıştıktan Sonra

### Discord'da Kurulum

1. **Log Kanalını Ayarla**
   ```
   /kurulum log_kanal ayarla kanal:#fto-rapor-log
   ```

2. **FTO Rolünü Ayarla**
   ```
   /kurulum fto_rol ayarla rol:@FTO
   ```

3. **Ayarları Kontrol Et**
   ```
   /kurulum ayarlar
   ```

## 3️⃣ Kullanım

### Rapor Oluşturma
```
/rapor baslat fts:@stajyer
```
Sonra chat'e sırayla cevapları yaz:
- Puan için: `8` (0-10 arası)
- Boş geçmek için: `gec`

### Diğer Komutlar
```
/rapor iptal    → Raporu iptal et
/rapor devam    → Kaldığı yerden devam et
```

## ❌ Sorun Giderme

### "ENOENT: no such file or directory"
```bash
npm run setup
```

### "Token invalid"
config.js'deki token'ı kontrol et, yeniden al

### "Missing Permissions"
Botun "Manage Roles" ve "Send Messages" izni olmalı

### Komutlar görünmüyor
```bash
npm run deploy
```

### Bot offline
```bash
# Token doğru mu?
# Internet bağlantısı var mı?
# Developer Portal'da bot aktif mi?
```

## 📞 Destek

Sorun yaşıyorsan hatanın ekran görüntüsünü at!
