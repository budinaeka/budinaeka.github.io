# Admin Panel - Projects Management Guide

## 📋 Overview

Halaman admin untuk mengelola projects di portfolio website. Data disimpan di browser menggunakan **localStorage**, sehingga perubahan akan tersimpan secara lokal di browser Anda.

## 🔗 Akses Admin Panel

Buka halaman admin dengan mengakses:
```
admin-projects.html
```

**Catatan:** Link ini tidak ditampilkan di navigasi utama untuk menjaga privasi.

## ✨ Fitur

### 1. **View All Projects**
- Melihat semua projects yang ada
- Menampilkan preview gambar, kategori, dan ukuran card
- Quick access ke link project (jika ada)

### 2. **Add New Project**
Klik tombol "Add New Project" untuk menambah project baru dengan field:
- **Project Title** (required): Judul project
- **Description** (optional): Deskripsi singkat project
- **Category** (required): Pilih kategori
  - Published Research
  - Risk Mapping
  - WebGIS
  - Disaster Map
  - Machine Learning
  - Generative AI
  - Vibecoding
  - AI Agents (Autoclaw, Hermes)
  - Other
- **Card Size** (required): Ukuran tampilan di bento grid
  - Small (1 kolom)
  - Medium (1 kolom, lebih tinggi)
  - Large (2 kolom)
- **Image Path** (required): Path ke gambar (contoh: `img/products/6.jpg`)
- **Project Link** (optional): URL eksternal project

### 3. **Edit Project**
- Klik icon pensil (✏️) pada project card
- Edit field yang diinginkan
- Klik "Save Project"

### 4. **Delete Project**
- Klik icon trash (🗑️) pada project card
- Konfirmasi penghapusan
- Project akan dihapus dari daftar

### 5. **Export Data (Backup)** ⭐ NEW
- Klik tombol "Export Data"
- Download file JSON backup
- Format: `portfolio-projects-YYYY-MM-DD.json`
- Simpan di tempat aman

### 6. **Import Data (Restore)** ⭐ NEW
- Klik tombol "Import Data"
- Pilih file JSON backup
- Konfirmasi import (data lama akan terhapus!)
- Data ter-restore otomatis

### 7. **Reset to Default** ⭐ NEW
- Klik tombol "Reset to Default"
- Konfirmasi reset
- Kembali ke 5 default projects
- **WARNING:** Tidak bisa undo!

## 📁 Struktur File

```
portfolio/
├── index.html              # Halaman utama (public)
├── admin-projects.html     # Halaman admin (private)
├── projects-data.js        # JavaScript untuk load projects
├── style.css              # Styling
├── img/
│   └── products/          # Folder untuk gambar projects
│       ├── 1.jpg
│       ├── 2.jpg
│       └── ...
└── ADMIN-GUIDE.md         # Dokumentasi ini
```

## 🎨 Kategori & Badge Colors

| Kategori | Label | Icon | Warna |
|----------|-------|------|-------|
| research | Published Research | seal-check | Emerald |
| mapping | Risk Mapping | map-pin | Blue |
| webgis | WebGIS | globe | Cyan |
| disaster | Disaster Map | warning | Orange |
| ml | Machine Learning | tree-structure | Purple |
| genai | Generative AI | sparkle | Violet |
| vibecoding | Vibecoding | code | Fuchsia |
| aiagents | AI Agents | robot | Indigo |
| other | Other | folder | Slate |

## 📸 Upload Gambar

1. Simpan gambar project di folder `img/products/`
2. Gunakan nama file yang deskriptif (contoh: `fmd-risk-map.jpg`)
3. Masukkan path lengkap di form: `img/products/fmd-risk-map.jpg`
4. Rekomendasi ukuran gambar:
   - Small card: 600x600px (square)
   - Medium card: 800x600px (4:3)
   - Large card: 1200x675px (16:9)

## 💾 Data Storage

- Data disimpan di **localStorage** browser
- Data bersifat lokal per browser/device
- Tidak ada database server
- **PENTING:** Gunakan Export untuk backup!

### Backup Data:

**Cara Backup:**
1. Klik "Export Data" di admin panel
2. File JSON akan terdownload
3. Simpan di tempat aman (Desktop, Cloud, Git)

**Kapan Backup:**
- ✅ Sebelum import data baru
- ✅ Sebelum reset to default
- ✅ Setiap minggu (jika sering update)
- ✅ Sebelum clear browser data

**Restore Data:**
1. Klik "Import Data"
2. Pilih file backup JSON
3. Konfirmasi import

📖 **Lihat:** [BACKUP-GUIDE.md](BACKUP-GUIDE.md) untuk panduan lengkap backup & restore.

## 🔄 Sinkronisasi dengan Halaman Utama

- Perubahan di admin panel **otomatis** muncul di halaman utama
- Refresh halaman `index.html` untuk melihat perubahan
- Projects di-render secara dinamis dari localStorage

## 🚀 Tips & Best Practices

1. **Konsistensi Ukuran Card:**
   - Gunakan 1 large card sebagai featured project
   - Mix antara medium dan small untuk variasi visual
   - Hindari terlalu banyak large cards

2. **Kategori:**
   - Pilih kategori yang sesuai untuk badge yang tepat
   - Gunakan "other" jika tidak ada kategori yang cocok

3. **Deskripsi:**
   - Singkat dan jelas (1-2 kalimat)
   - Opsional untuk small cards
   - Wajib untuk large cards

4. **Link:**
   - Gunakan URL lengkap (https://...)
   - Kosongkan jika project tidak punya link eksternal

## 🔒 Keamanan

- Halaman admin tidak ter-link dari navigasi utama
- Akses hanya melalui URL langsung
- Untuk production, tambahkan autentikasi
- Pertimbangkan untuk memindahkan ke backend

## 🐛 Troubleshooting

**Projects tidak muncul di halaman utama:**
- Pastikan `projects-data.js` ter-load di `index.html`
- Check browser console untuk error
- Clear cache dan refresh

**Gambar tidak muncul:**
- Pastikan path gambar benar
- Check apakah file gambar ada di folder
- Gunakan relative path dari root

**Data hilang setelah clear browser:**
- localStorage akan terhapus jika clear browsing data
- Backup data secara berkala
- Pertimbangkan migrasi ke database

## 📞 Support

Untuk pertanyaan atau masalah, hubungi developer atau check dokumentasi di repository.

---

**Last Updated:** 2026
**Version:** 1.0.0
