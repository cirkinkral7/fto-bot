# 📜 PD Sertifika Yönetim Botu - Kapsamlı Dokümantasyon

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![Discord.js](https://img.shields.io/badge/discord.js-v14-7289DA.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**Discord sunucularında kullanıcı sertifikalarını profesyonelce yönetmek için geliştirilmiş tam otomatik bot sistemi.**

[Özellikler](#-özellikler) • [Kurulum](#-kurulum) • [Kullanım](#-kullanım) • [Dokümantasyon](#-detaylı-dokümantasyon) • [Destek](#-destek)

</div>

---

## 📋 İçindekiler

- [Genel Bakış](#-genel-bakış)
- [Özellikler](#-özellikler)
- [Sistem Gereksinimleri](#-sistem-gereksinimleri)
- [Hızlı Başlangıç](#-hızlı-başlangıç)
- [Detaylı Kurulum](#-detaylı-kurulum)
  - [Discord Bot Oluşturma](#1%EF%B8%8F⃣-discord-bot-oluşturma)
  - [Gerekli Bilgileri Toplama](#2%EF%B8%8F⃣-gerekli-bilgileri-toplama)
  - [Proje Kurulumu](#3%EF%B8%8F⃣-proje-kurulumu)
  - [Yapılandırma](#4%EF%B8%8F⃣-yapılandırma)
  - [İlk Başlatma](#5%EF%B8%8F⃣-ilk-başlatma)
- [Komutlar ve Kullanım](#-komutlar-ve-kullanım)
- [Veritabanı Yapısı](#-veritabanı-yapısı)
- [Gelişmiş Konular](#-gelişmiş-konular)
- [Sorun Giderme](#-sorun-giderme)
- [SSS](#-sık-sorulan-sorular)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)

---

## 🎯 Genel Bakış

PD Sertifika Yönetim Botu, Discord sunucularında kullanıcılara verilen sertifikaların (ruhsatlar, belgeler, yetkiler vb.) profesyonel şekilde yönetilmesini sağlayan bir sistemdir.

### 🎭 Kullanım Senaryoları

- **Roleplay Sunucuları**: Silah ruhsatı, araç belgesi, meslek sertifikaları
- **Eğitim Toplulukları**: Kurs tamamlama belgeleri, sertifikalar
- **Gaming Toplulukları**: Özel yetkilendirmeler, turnuva katılım belgeleri
- **Profesyonel Topluluklar**: Üyelik belgeleri, yetki sertifikaları

### 🏆 Neden Bu Bot?

| Özellik | Açıklama |
|---------|----------|
| 🚀 **Kolay Kurulum** | MySQL gerektirmez, JSON tabanlı veritabanı |
| 🇹🇷 **Türkçe** | Tamamen Türkçe komutlar ve arayüz |
| ⚡ **Otomatik Takip** | Durum hesaplaması otomatik yapılır |
| 📊 **Detaylı Raporlama** | Dolacak sertifikaları kolayca görün |
| 🔐 **Güvenli** | Rol tabanlı yetkilendirme sistemi |
| 📝 **Denetim Logları** | Her işlem kayıt altına alınır |

---

## ✨ Özellikler

### 🎫 Sertifika Yönetimi

- ✅ **Sertifika Türü Oluşturma**: Özel sertifika kategorileri tanımlayın
- ✅ **Sertifika Verme**: Kullanıcılara tarihli sertifika atayın
- ✅ **Sertifika Yenileme**: Bitiş tarihlerini güncelleyin
- ✅ **Sertifika İptali**: Gerektiğinde sertifikaları iptal edin
- ✅ **Toplu Görüntüleme**: Bir kullanıcının tüm sertifikalarını görün

### 📊 Otomatik Takip Sistemi

- 🟢 **Aktif Durum**: 14 günden fazla süre kalan sertifikalar
- 🟡 **Yaklaşan Durum**: 1-14 gün arası süre kalan sertifikalar
- 🔴 **Dolmuş Durum**: Süresi geçmiş sertifikalar
- ⚫ **İptal Durum**: Manuel olarak iptal edilen sertifikalar

### 🔔 Bildirim ve Raporlama

- 📅 **Süre Filtreleri**: 7, 14 veya 30 gün içinde dolacakları listeleyin
- 📈 **Kalan Gün Hesaplama**: Her sertifika için otomatik hesaplama
- 📋 **Detaylı Görüntüleme**: Embed formatında profesyonel görünüm

### 🔐 Güvenlik ve Denetim

- 👮 **Rol Tabanlı Erişim**: Sadece yönetici rolleri kullanabilir
- 📝 **Denetim Kayıtları**: Tüm işlemler JSON dosyasına loglanır
- 🔒 **Log Kanalı**: Tüm işlemler belirlediğiniz kanala gönderilir

### 🛠️ Teknik Özellikler

- ⚡ **JSON Veritabanı**: Kurulum gerektirmez, hemen başlayın
- 🔄 **Otomatik Yedekleme**: Basit dosya kopyalama ile yedekleme
- 📦 **Hafif Yapı**: Minimum kaynak kullanımı
- 🚀 **Discord.js v14**: En güncel Discord API

---

## 💻 Sistem Gereksinimleri

### Minimum Gereksinimler

| Bileşen | Gereksinim |
|---------|------------|
| **İşletim Sistemi** | Windows 10/11, Linux (Ubuntu 20.04+), macOS 10.15+ |
| **Node.js** | v18.0.0 veya üzeri |
| **RAM** | 512 MB |
| **Disk Alanı** | 100 MB |
| **İnternet** | Stabil bağlantı (7/24 için önerilir) |

### Önerilen Gereksinimler

| Bileşen | Öneri |
|---------|-------|
| **İşletim Sistemi** | Ubuntu 22.04 LTS (VDS için) |
| **Node.js** | v20.x LTS |
| **RAM** | 1 GB |
| **Disk Alanı** | 500 MB (yedekleme için) |
| **Hosting** | VDS/VPS (7/24 çalışma için) |

### Desteklenen Platformlar

- ✅ **Windows**: 10, 11
- ✅ **Linux**: Ubuntu, Debian, CentOS, AlmaLinux
- ✅ **macOS**: Catalina ve üzeri
- ✅ **Cloud**: AWS, DigitalOcean, Linode, Hetzner
- ✅ **Hosting**: VDS, VPS, Dedicated Server

---

## 🚀 Hızlı Başlangıç

> **Not**: Detaylı kurulum için [Detaylı Kurulum](#-detaylı-kurulum) bölümüne bakın.

```bash
# 1. Projeyi klonlayın veya indirin
git clone https://github.com/kullanici/pd-sertifika-bot.git
cd pd-sertifika-bot

# 2. Bağımlılıkları yükleyin
npm install

# 3. .env dosyasını yapılandırın
cp .env.example .env
nano .env

# 4. Komutları Discord'a kaydedin
npm run deploy

# 5. Botu başlatın
npm start
```

---

## 📚 Detaylı Kurulum

### 1️⃣ Discord Bot Oluşturma

#### Adım 1.1: Application Oluşturma

1. **Discord Developer Portal**'a gidin: https://discord.com/developers/applications
2. Sağ üstteki **"New Application"** butonuna tıklayın
3. Bot için bir isim girin (örn: `PD Sertifika Bot`)
4. "Terms of Service" ve "Developer Policy"'yi kabul edin
5. **"Create"** butonuna tıklayın

#### Adım 1.2: Bot Ayarları

1. Sol menüden **"Bot"** sekmesine geçin
2. **"Reset Token"** butonuna tıklayın
3. Çıkan token'ı **güvenli bir yere kopyalayın** (bir daha gösterilmeyecek!)

   ```
   Örnek Token: MTIzNDU2Nzg5MDEyMzQ1Njc4OQ.GaBcDe.FgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNo
   ```

4. **Privileged Gateway Intents** bölümünde şunları ayarlayın:
   - ❌ `Presence Intent` → **KAPALI**
   - ✅ `Server Members Intent` → **AÇIK** (zorunlu)
   - ❌ `Message Content Intent` → **KAPALI**

5. **"Save Changes"** butonuna tıklayın

#### Adım 1.3: Bot İzinlerini Ayarlama

1. Sol menüden **"OAuth2"** → **"URL Generator"** seçin
2. **Scopes** bölümünde:
   - ✅ `bot`
   - ✅ `applications.commands`
3. **Bot Permissions** bölümünde:
   - ✅ `Send Messages`
   - ✅ `Send Messages in Threads`
   - ✅ `Embed Links`
   - ✅ `Attach Files`
   - ✅ `Read Message History`
   - ✅ `Use External Emojis`
   - ✅ `Add Reactions`

4. Altta oluşan URL'yi kopyalayın:
   ```
   https://discord.com/api/oauth2/authorize?client_id=1234567890&permissions=412317273088&scope=bot%20applications.commands
   ```

#### Adım 1.4: Botu Sunucuya Davet Etme

1. Kopyaladığınız URL'yi tarayıcıda açın
2. Botu eklemek istediğiniz sunucuyu seçin
3. İzinleri kontrol edin ve **"Yetki Ver"** butonuna tıklayın
4. reCAPTCHA doğrulamasını tamamlayın

✅ Bot artık sunucunuzda! (çevrimdışı görünecek, bu normal)

---

### 2️⃣ Gerekli Bilgileri Toplama

#### 2.1: Application ID (Client ID)

1. Discord Developer Portal'da botunuza gidin
2. Sol menüden **"General Information"** seçin
3. **"Application ID"** alanını kopyalayın

   ```
   Örnek: 1234567890123456789
   ```

#### 2.2: Guild ID (Sunucu ID)

1. Discord uygulamasında **Geliştirici Modu**'nu açın:
   - Ayarlar → Gelişmiş → **Geliştirici Modu** → **AÇIK**
2. Sunucu listesinde sunucunuza **sağ tıklayın**
3. **"Sunucu Kimliğini Kopyala"** seçin

   ```
   Örnek: 9876543210987654321
   ```

#### 2.3: Log Channel ID (Log Kanalı ID)

1. Discord'da log tutmak istediğiniz kanala **sağ tıklayın**
2. **"Kanal Kimliğini Kopyala"** seçin

   ```
   Örnek: 1111222233334444555
   ```

> **Öneri**: `#bot-logs` veya `#sertifika-logs` gibi özel bir kanal oluşturun

#### 2.4: Admin Role ID(ler)

1. Sunucu Ayarları → **Roller** menüsüne gidin
2. Komutları kullanmasını istediğiniz role **sağ tıklayın**
3. **"Rol Kimliğini Kopyala"** seçin

   ```
   Örnek: 555444333222111000
   ```

> **Not**: Birden fazla rol için virgülle ayırın

---

### 3️⃣ Proje Kurulumu

#### 3.1: Node.js Kurulumu

**Windows:**
1. https://nodejs.org/ adresinden LTS sürümü indirin
2. İndirilen `.msi` dosyasını çalıştırın
3. Kurulum sihirbazını takip edin
4. Komut istemi açıp kontrol edin:
   ```bash
   node --version
   # v20.11.0
   npm --version
   # 10.2.4
   ```

**Linux (Ubuntu/Debian):**
```bash
# NodeSource reposunu ekle
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Node.js'i kur
sudo apt-get install -y nodejs

# Kontrol et
node --version
npm --version
```

**macOS:**
```bash
# Homebrew ile kur
brew install node@20

# Kontrol et
node --version
npm --version
```

#### 3.2: Proje Dosyalarını İndirme

**Yöntem 1: Git ile (Önerilir)**
```bash
# Projeyi klonla
git clone https://github.com/kullanici/pd-sertifika-bot.git

# Klasöre gir
cd pd-sertifika-bot
```

**Yöntem 2: Manuel İndirme**
1. Proje dosyalarını ZIP olarak indirin
2. İstediğiniz bir konuma çıkarın
3. Klasöre terminal/cmd ile gidin

**Yöntem 3: VDS'ye Yükleme**
```bash
# VDS'ye bağlan
ssh root@sunucu_ip_adresi

# Klasör oluştur
mkdir -p /root/pd-sertifika-bot
cd /root/pd-sertifika-bot

# Dosyaları WinSCP/FileZilla ile buraya yükle
```

#### 3.3: Bağımlılıkları Yükleme

```bash
# NPM bağımlılıklarını yükle
npm install
```

Yüklenen paketler:
- `discord.js@14.14.1` - Discord API wrapper
- `dotenv@16.3.1` - Ortam değişkenleri yönetimi
- `date-fns@3.0.6` - Tarih işleme kütüphanesi
- `nodemon@3.0.2` - Geliştirme için otomatik yeniden başlatma (dev)

Beklenen çıktı:
```
added 52 packages, and audited 53 packages in 8s
```

---

### 4️⃣ Yapılandırma

#### 4.1: .env Dosyası Oluşturma

**Linux/macOS:**
```bash
cp .env.example .env
nano .env
```

**Windows:**
```bash
copy .env.example .env
notepad .env
```

#### 4.2: .env Dosyasını Doldurma

```env
# ============================================
# DISCORD BOT AYARLARI
# ============================================

# Bot Token (Discord Developer Portal'dan aldığınız)
DISCORD_TOKEN=MTIzNDU2Nzg5MDEyMzQ1Njc4OQ.GaBcDe.FgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNo

# Application ID / Client ID
CLIENT_ID=1234567890123456789

# ============================================
# SUNUCU AYARLARI
# ============================================

# Sunucu ID (komutların kaydedileceği sunucu)
GUILD_ID=9876543210987654321

# Log kanalı ID (işlem loglarının gönderileceği kanal)
LOG_CHANNEL_ID=1111222233334444555

# ============================================
# YETKİLENDİRME
# ============================================

# Yönetici Rol ID'leri (virgülle ayırarak birden fazla eklenebilir)
# Örnek: ADMIN_ROLE_IDS=555444333222111000,666555444333222111
ADMIN_ROLE_IDS=555444333222111000,666555444333222111

# ============================================
# SİSTEM AYARLARI
# ============================================

# Zaman dilimi (Türkiye için Europe/Istanbul)
TZ=Europe/Istanbul

# Log seviyesi (development/production)
NODE_ENV=production
```

#### 4.3: Yapılandırma Doğrulama

```bash
# Node ile doğrula
node -e "require('dotenv').config(); console.log('Token:', process.env.DISCORD_TOKEN ? '✓' : '✗'); console.log('Client ID:', process.env.CLIENT_ID ? '✓' : '✗'); console.log('Guild ID:', process.env.GUILD_ID ? '✓' : '✗');"
```

Beklenen çıktı:
```
Token: ✓
Client ID: ✓
Guild ID: ✓
```

---

### 5️⃣ İlk Başlatma

#### 5.1: Komutları Discord'a Kaydetme

```bash
npm run deploy
```

Beklenen çıktı:
```
[2025-01-16 12:00:00] ✅ Komut hazırlandı: sertifika
[2025-01-16 12:00:00] ✅ Komut hazırlandı: sertifika-türü
[2025-01-16 12:00:01] ✅ 2 komut kaydediliyor...
[2025-01-16 12:00:02] ✅ 2 komut başarıyla kaydedildi!
```

> **Not**: Bu işlemi sadece ilk kurulumda veya komutlarda değişiklik yaptığınızda yapmanız gerekir.

#### 5.2: Botu Başlatma

**Geliştirme Modu (Tavsiye Edilen - İlk Test İçin):**
```bash
npm run dev
```

**Üretim Modu:**
```bash
npm start
```

#### 5.3: Başarılı Başlatma Çıktısı

```
[2025-01-16 12:00:05] ✅ Data klasörü oluşturuldu
[2025-01-16 12:00:05] ✅ Sertifika türleri dosyası oluşturuldu
[2025-01-16 12:00:05] ✅ Sertifika kayıtları dosyası oluşturuldu
[2025-01-16 12:00:05] ✅ Denetim kayıtları dosyası oluşturuldu
[2025-01-16 12:00:05] ✅ Veritabanı hazır!
[2025-01-16 12:00:05] ✅ Komut yüklendi: sertifika
[2025-01-16 12:00:05] ✅ Komut yüklendi: sertifika-türü
[2025-01-16 12:00:05] ✅ Toplam 2 komut yüklendi.
[2025-01-16 12:00:06] ✅ Bot giriş yaptı: PD Sertifika Bot#1234
[2025-01-16 12:00:06] ✅ Bot tamamen hazır! ✅
```

✅ **Bot artık çalışıyor!** Discord'da çevrimiçi görünmeli.

#### 5.4: İlk Test

Discord sunucunuzda:
```
/sertifika-türü listele
```

Bot cevap vermeli:
```
📋 Liste Boş
Henüz hiç sertifika türü eklenmemiş.
```

---

## 🎮 Komutlar ve Kullanım

### 📋 Komut Listesi

| Komut | Alt Komut | Açıklama |
|-------|-----------|----------|
| `/sertifika-türü` | `ekle` | Yeni sertifika türü oluştur |
| | `listele` | Tüm sertifika türlerini göster |
| | `kaldır` | Sertifika türünü arşivle |
| `/sertifika` | `ekle` | Kullanıcıya sertifika ver |
| | `gör` | Kullanıcının sertifikalarını göster |
| | `yenile` | Sertifika bitiş tarihini güncelle |
| | `iptal` | Sertifikayı iptal et |
| | `süre` | Dolacak sertifikaları listele |

---

### 🏷️ `/sertifika-türü` Komutları

#### **Yeni Tür Ekle**

```
/sertifika-türü ekle
  ad: [Sertifika türü adı]
  açıklama: [Açıklama (opsiyonel)]
```

**Parametreler:**

| Parametre | Tip | Zorunlu | Maksimum | Açıklama |
|-----------|-----|---------|----------|----------|
| `ad` | Metin | ✅ Evet | 100 karakter | Sertifika türünün benzersiz adı |
| `açıklama` | Metin | ❌ Hayır | 500 karakter | Sertifika hakkında ek bilgi |

**Örnek Kullanım:**

```
/sertifika-türü ekle
  ad: Silah Ruhsatı
  açıklama: Ateşli silah taşıma ve kullanma yetkisi
```

**Bot Yanıtı:**
```
✅ Sertifika Türü Eklendi

✅ Silah Ruhsatı başarıyla eklendi.

📝 Açıklama: Ateşli silah taşıma ve kullanma yetkisi
```

---

#### **Türleri Listele**

```
/sertifika-türü listele
```

**Parametreler:** Yok

**Bot Yanıtı:**
```
📜 Sertifika Türleri

1. Silah Ruhsatı
   └ Ateşli silah taşıma ve kullanma yetkisi

2. Araç Ruhsatı
   └ Araç kullanma belgesi

3. Sağlık Raporu
   └ Yıllık sağlık kontrolü

4. Eğitim Sertifikası
   └ Temel eğitim tamamlama

Toplam 4 tür
```

---

#### **Tür Kaldır (Arşivle)**

```
/sertifika-türü kaldır
  tür: [Sertifika türü adı]
```

**Parametreler:**

| Parametre | Tip | Zorunlu | Açıklama |
|-----------|-----|---------|----------|
| `tür` | Seçim | ✅ Evet | Kaldırılacak sertifika türü (autocomplete ile) |

> **Önemli**: Bu işlem türü arşivler, silmez. Mevcut sertifikalar etkilenmez.

---

### 🎫 `/sertifika` Komutları

#### **Sertifika Ekle**

```
/sertifika ekle
  kullanıcı: [@Kullanıcı]
  tür: [Sertifika türü]
  başlangıç: [GG.AA.YYYY]
  bitiş: [GG.AA.YYYY]
  not: [Not (opsiyonel)]
```

**Parametreler:**

| Parametre | Tip | Zorunlu | Format | Açıklama |
|-----------|-----|---------|--------|----------|
| `kullanıcı` | Kullanıcı | ✅ Evet | @mention | Sertifika verilecek kullanıcı |
| `tür` | Seçim | ✅ Evet | Autocomplete | Sertifika türü |
| `başlangıç` | Metin | ✅ Evet | GG.AA.YYYY | Başlangıç tarihi |
| `bitiş` | Metin | ✅ Evet | GG.AA.YYYY | Bitiş tarihi |
| `not` | Metin | ❌ Hayır | 500 karakter | Ek notlar |

**Tarih Formatı:**
- ✅ Doğru: `15.01.2025`, `01.12.2025`
- ❌ Yanlış: `2025-01-15`, `15/01/2025`, `15-01-2025`

**Örnek Kullanım:**

```
/sertifika ekle
  kullanıcı: @Emir
  tür: Silah Ruhsatı
  başlangıç: 15.01.2025
  bitiş: 15.07.2025
  not: İlk kez alınan ruhsat
```

---

#### **Sertifikaları Görüntüle**

```
/sertifika gör
  kullanıcı: [@Kullanıcı]
```

**Bot Yanıtı:**
```
📜 @Emir - Sertifika Durumu

🟢 Silah Ruhsatı
Durum: Aktif
Başlangıç: 15 Ocak 2025
Bitiş: 15 Temmuz 2025
Kalan: 181 gün

🟡 Sağlık Raporu
Durum: Yaklaşan
Başlangıç: 01 Ocak 2025
Bitiş: 20 Ocak 2025
Kalan: 5 gün
```

---

#### **Sertifika Yenile**

```
/sertifika yenile
  kullanıcı: [@Kullanıcı]
  tür: [Sertifika türü]
  yeni-bitiş: [GG.AA.YYYY]
  not: [Not (opsiyonel)]
```

---

#### **Sertifika İptal Et**

```
/sertifika iptal
  kullanıcı: [@Kullanıcı]
  tür: [Sertifika türü]
  sebep: [Sebep (opsiyonel)]
```

---

#### **Dolacak Sertifikaları Listele**

```
/sertifika süre
  gün: [7 gün / 14 gün / 30 gün]
```

**Bot Yanıtı:**
```
⚠️ 14 Gün İçinde Dolacak Sertifikalar

• Emir#1234 - Sağlık Raporu (3 gün)
• Ahmet#5678 - Araç Ruhsatı (7 gün)
• Mehmet#9012 - İş İzni (10 gün)

Toplam 3 sertifika
```

---

## 💾 Veritabanı Yapısı

### 📂 Dosya Organizasyonu

```
data/
├── sertifika_turleri.json      # Sertifika türleri
├── sertifika_kayitlari.json    # Kullanıcı sertifikaları
└── denetim_kayitlari.json      # Denetim logları
```

### 🏷️ sertifika_turleri.json

```json
[
  {
    "id": 1,
    "ad": "Silah Ruhsatı",
    "aciklama": "Ateşli silah taşıma yetkisi",
    "arsivli": false,
    "olusturan_id": "123456789012345678",
    "olusturma_tarihi": "2025-01-16T10:00:00.000Z"
  }
]
```

### 🎫 sertifika_kayitlari.json

```json
[
  {
    "id": 1,
    "kullanici_id": "987654321098765432",
    "sertifika_turu_id": 1,
    "baslangic_tarihi": "2025-01-15",
    "bitis_tarihi": "2025-07-15",
    "durum": "aktif",
    "veren_id": "123456789012345678",
    "notlar": "İlk kez alınan ruhsat",
    "olusturma_tarihi": "2025-01-16T10:10:00.000Z",
    "guncelleme_tarihi": "2025-01-16T10:10:00.000Z"
  }
]
```

### 📋 denetim_kayitlari.json

```json
[
  {
    "id": 1,
    "islem": "ekle",
    "yapan_id": "123456789012345678",
    "hedef_kullanici_id": "987654321098765432",
    "sertifika_turu_id": 1,
    "kayit_id": 1,
    "eski_deger": null,
    "yeni_deger": null,
    "aciklama": "Silah Ruhsatı sertifikası eklendi",
    "tarih": "2025-01-16T10:10:00.000Z"
  }
]
```

---

## 🚀 Gelişmiş Konular

### 🔄 PM2 ile 7/24 Çalıştırma

```bash
# Global olarak PM2'yi kur
npm install -g pm2

# Bot klasörüne git
cd /root/pd-sertifika-bot

# PM2 ile başlat
pm2 start src/index.js --name "pd-sertifika-bot"

# Otomatik başlatma
pm2 startup
pm2 save

# Durumu görüntüle
pm2 status

# Logları izle
pm2 logs pd-sertifika-bot

# Yeniden başlat
pm2 restart pd-sertifika-bot
```

### 📦 Yedekleme

```bash
# Manuel yedekleme
cd /root/pd-sertifika-bot
tar -czf backups/backup_$(date +%Y%m%d).tar.gz data/

# 7 günden eski yedekleri sil
find backups/ -name "backup_*.tar.gz" -mtime +7 -delete
```

**Otomatik Yedekleme (Cron):**

```bash
# Crontab'a ekle
crontab -e

# Her gün saat 03:00'da yedekle
0 3 * * * /root/pd-sertifika-bot/backup.sh
```

---

## 🐛 Sorun Giderme

### ❌ Sık Karşılaşılan Hatalar

#### 1. "Invalid Token"

**Çözüm:**
```bash
# .env dosyasını düzenle
nano .env

# Token'ı güncelle
DISCORD_TOKEN=YENİ_TOKEN_BURAYA

# Botu yeniden başlat
pm2 restart pd-sertifika-bot
```

---

#### 2. "Missing Access"

**Çözüm:**
- Sunucu Ayarları → Roller
- Bot rolünü en üst sıralara taşı
- Gerekli izinleri kontrol et

---

#### 3. "Unknown Interaction"

**Çözüm:**
```bash
# Komutları yeniden kaydet
npm run deploy

# Discord'u kapat-aç
# 5 dakika bekle
```

---

#### 4. Komutlar Görünmüyor

**Çözüm:**
```bash
# Komutları yeniden kaydet
npm run deploy

# Discord'u tamamen kapat-aç
# 5-10 dakika bekle
```

---

#### 5. Bot Çevrimdışı

**Çözüm:**
```bash
# Bot çalışıyor mu?
pm2 status

# Çalışmıyorsa başlat
pm2 start pd-sertifika-bot

# Hata loglarını kontrol et
pm2 logs pd-sertifika-bot --err
```

---

## ❓ Sık Sorulan Sorular

### 1. Bot kaç sunucuda kullanılabilir?

**Cevap:** Bot, istediğiniz kadar sunucuda kullanılabilir.

---

### 2. Veritabanı ne kadar büyüyebilir?

| Kayıt Sayısı | Dosya Boyutu | Performans |
|--------------|--------------|------------|
| 100 kayıt | ~50 KB | Mükemmel |
| 1,000 kayıt | ~500 KB | İyi |
| 10,000 kayıt | ~5 MB | Kabul Edilebilir |

---

### 3. Sertifika süreleri otomatik yenilenir mi?

**Cevap:** Hayır, bot sadece durum takibi yapar. Yenileme manuel yapılmalıdır.

---

### 4. Birden fazla yönetici rolü eklenebilir mi?

**Cevap:** Evet! `.env` dosyasında virgülle ayırın:

```env
ADMIN_ROLE_IDS=555444333222111000,666555444333222111
```

---

### 5. Silinen bir sertifikayı geri getirebilir miyim?

**Cevap:** İptal edilen sertifikalar kalıcıdır. Ancak yedekten geri yüklenebilir.

---

## 🤝 Katkıda Bulunma

1. **Fork** edin projeyi
2. **Feature branch** oluşturun (`git checkout -b feature/YeniOzellik`)
3. **Commit** edin değişikliklerinizi (`git commit -m 'Yeni özellik: X eklendi'`)
4. **Push** edin branch'inizi (`git push origin feature/YeniOzellik`)
5. **Pull Request** açın

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

```
MIT License

Copyright (c) 2025 PD Sertifika Bot

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 İletişim

- **GitHub**: https://github.com/kullanici/pd-sertifika-bot
- **Discord**: [Destek Sunucusu](https://discord.gg/example)
- **Email**: support@example.com

---

## 🙏 Teşekkürler

- **Discord.js** ekibine harika kütüphane için
- **date-fns** geliştiricilerine tarih işlemleri için
- **Topluluğa** geri bildirimler ve öneriler için

---

<div align="center">

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!**

Made with ❤️ for the Discord community

*Son güncelleme: 16 Ocak 2025*

</div>
