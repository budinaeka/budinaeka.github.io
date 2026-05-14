# 💾 Backup & Restore Guide

Panduan lengkap untuk backup dan restore data projects portfolio.

---

## 🎯 Overview

Portfolio ini menggunakan **localStorage** browser untuk menyimpan data projects. Fitur Export/Import memungkinkan Anda untuk:
- 📥 Backup data ke file JSON
- 📤 Restore data dari backup
- 🔄 Reset ke default projects
- 💾 Version control data Anda

---

## 📥 Export Data (Backup)

### Cara Export:

1. **Buka Admin Panel**
   ```
   admin-projects.html
   ```

2. **Klik tombol "Export Data"**
   - Icon: Download ⬇️
   - Warna: Secondary (white/gray)

3. **File akan otomatis terdownload**
   - Format: `portfolio-projects-YYYY-MM-DD.json`
   - Contoh: `portfolio-projects-2026-05-14.json`

### Kapan Harus Export?

✅ **Sebelum:**
- Import data baru
- Reset to default
- Clear browser data
- Update browser
- Pindah device

✅ **Secara Berkala:**
- Setiap minggu (jika sering update)
- Setelah menambah project penting
- Sebelum deploy ke production

---

## 📤 Import Data (Restore)

### Cara Import:

1. **Buka Admin Panel**
   ```
   admin-projects.html
   ```

2. **Klik tombol "Import Data"**
   - Icon: Upload ⬆️
   - Warna: Secondary (white/gray)

3. **Pilih file JSON backup**
   - Hanya file `.json` yang diterima
   - File harus valid JSON format

4. **Konfirmasi Import**
   - Akan muncul dialog konfirmasi
   - **WARNING:** Ini akan replace semua data!

5. **Data ter-restore**
   - Projects list akan refresh otomatis
   - Toast notification muncul

### ⚠️ Peringatan Import:

- ❌ **Data lama akan terhapus** - tidak bisa undo
- ❌ **Pastikan file backup valid** - cek format JSON
- ✅ **Export dulu sebelum import** - backup data lama

---

## 🔄 Reset to Default

### Cara Reset:

1. **Klik tombol "Reset to Default"**
   - Icon: Counter-clockwise ↺
   - Warna: Red (danger)

2. **Konfirmasi Reset**
   - Dialog konfirmasi akan muncul
   - **WARNING:** Tidak bisa undo!

3. **Data kembali ke default**
   - 5 default projects
   - Semua custom projects hilang

### Kapan Perlu Reset?

- 🔧 Testing/development
- 🗑️ Ingin mulai dari awal
- 🐛 Data corrupt/error
- 📚 Demo/training

---

## 📋 Format File Backup

### Struktur JSON:

```json
[
  {
    "id": 1,
    "title": "Project Title",
    "description": "Project description",
    "category": "research",
    "size": "large",
    "image": "img/products/1.jpg",
    "link": "https://example.com"
  },
  {
    "id": 2,
    "title": "Another Project",
    "description": "Description here",
    "category": "webgis",
    "size": "medium",
    "image": "img/products/2.jpg",
    "link": ""
  }
]
```

### Field Requirements:

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| id | ✅ Yes | Number | Unique identifier |
| title | ✅ Yes | String | Project title |
| description | ❌ No | String | Project description |
| category | ✅ Yes | String | Category code |
| size | ✅ Yes | String | small/medium/large |
| image | ✅ Yes | String | Image path |
| link | ❌ No | String | External URL |

### Valid Categories:

```
research, mapping, webgis, disaster, ml, 
genai, vibecoding, aiagents, other
```

### Valid Sizes:

```
small, medium, large
```

---

## 🔐 Best Practices

### 1. Regular Backups

**Weekly Backup Schedule:**
```
Monday:    Export after weekend updates
Friday:    Export before weekend
Monthly:   Archive backup to cloud storage
```

### 2. Naming Convention

**Recommended Format:**
```
portfolio-projects-YYYY-MM-DD.json          (auto-generated)
portfolio-projects-YYYY-MM-DD-v2.json       (manual version)
portfolio-projects-backup-before-import.json (before major changes)
```

### 3. Storage Locations

**Local Storage:**
- 📁 Desktop/Documents/Portfolio-Backups/
- 📁 Downloads/ (temporary)

**Cloud Storage:**
- ☁️ Google Drive
- ☁️ Dropbox
- ☁️ OneDrive

**Version Control:**
- 🔧 Git repository
- 🔧 GitHub private repo

### 4. Multiple Backups

**3-2-1 Backup Rule:**
- **3** copies of data
- **2** different storage types
- **1** offsite backup

**Example:**
1. Original (localStorage)
2. Local file (Desktop)
3. Cloud storage (Google Drive)

---

## 🚨 Troubleshooting

### Problem: Export tidak berfungsi

**Solusi:**
1. Check browser console untuk error
2. Pastikan ada data di localStorage
3. Coba browser lain
4. Disable browser extensions

### Problem: Import gagal

**Possible Causes:**
- ❌ File bukan JSON format
- ❌ JSON syntax error
- ❌ Missing required fields
- ❌ Invalid category/size values

**Solusi:**
1. Validate JSON di jsonlint.com
2. Check file structure
3. Compare dengan export baru
4. Fix syntax errors

### Problem: Data hilang setelah import

**Solusi:**
1. Import backup file lagi
2. Jika tidak ada backup, reset to default
3. Rebuild projects manually

### Problem: File corrupt

**Prevention:**
- ✅ Export regularly
- ✅ Keep multiple backups
- ✅ Validate before import
- ✅ Test import di browser lain

---

## 📊 Backup Workflow

### Daily Workflow:

```
1. Open admin panel
2. Make changes (add/edit/delete)
3. Test changes
4. Export backup (if major changes)
5. Close admin panel
```

### Before Major Changes:

```
1. Export current data
2. Rename: backup-before-[change].json
3. Make changes
4. Test thoroughly
5. Export new backup
6. Keep both versions
```

### Recovery Workflow:

```
1. Identify problem
2. Find latest good backup
3. Import backup file
4. Verify data
5. Export new backup
```

---

## 🔧 Advanced: Manual Backup

### Via Browser Console:

**Export:**
```javascript
// Get data
const data = localStorage.getItem('portfolioProjects');

// Copy to clipboard
copy(data);

// Or download
const blob = new Blob([data], {type: 'application/json'});
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'manual-backup.json';
a.click();
```

**Import:**
```javascript
// Paste JSON data
const data = `[{"id":1,"title":"Test",...}]`;

// Save to localStorage
localStorage.setItem('portfolioProjects', data);

// Reload page
location.reload();
```

---

## 📝 Backup Checklist

### Before Deployment:

- [ ] Export latest data
- [ ] Test import on clean browser
- [ ] Verify all projects display
- [ ] Check all links work
- [ ] Backup to cloud storage
- [ ] Commit to Git (if using)

### Monthly Maintenance:

- [ ] Export current data
- [ ] Archive old backups
- [ ] Clean up duplicate files
- [ ] Verify backup integrity
- [ ] Update documentation

### Before Browser Update:

- [ ] Export data
- [ ] Save to safe location
- [ ] Note browser version
- [ ] Test after update
- [ ] Re-import if needed

---

## 🎯 Quick Reference

### Keyboard Shortcuts (Future):

```
Ctrl + E  - Export data
Ctrl + I  - Import data
Ctrl + R  - Reset (with confirmation)
```

### File Locations:

```
Data:     localStorage['portfolioProjects']
Backup:   Downloads/portfolio-projects-*.json
Admin:    admin-projects.html
Main:     index.html
```

### Support Files:

```
projects-data.js     - Data loader
admin-projects.html  - Admin panel
BACKUP-GUIDE.md     - This guide
ADMIN-GUIDE.md      - Admin guide
```

---

## 💡 Tips & Tricks

### Tip 1: Automated Backup

Create a reminder:
- Weekly: Export data
- Monthly: Archive to cloud
- Quarterly: Verify backups

### Tip 2: Version Control

Use Git for backups:
```bash
git add portfolio-projects-backup.json
git commit -m "Backup: Added 3 new projects"
git push
```

### Tip 3: Multiple Environments

Keep separate backups:
- `projects-production.json` - Live site
- `projects-staging.json` - Testing
- `projects-development.json` - Development

### Tip 4: Backup Before Experiments

Before trying new features:
1. Export current data
2. Name: `backup-before-experiment.json`
3. Experiment freely
4. Restore if needed

---

## 🔗 Related Documentation

- [ADMIN-GUIDE.md](ADMIN-GUIDE.md) - Admin panel usage
- [README.md](README.md) - Project overview
- [CHANGELOG.md](CHANGELOG.md) - Version history

---

## ❓ FAQ

**Q: Berapa sering harus backup?**
A: Minimal seminggu sekali, atau setelah perubahan besar.

**Q: Apakah data aman di localStorage?**
A: Aman untuk portfolio personal, tapi bisa hilang jika clear browser data.

**Q: Bisa sync antar device?**
A: Tidak otomatis. Gunakan export/import manual atau cloud storage.

**Q: Maksimal berapa projects?**
A: localStorage limit ~5-10MB. Cukup untuk ratusan projects.

**Q: Bisa undo setelah import?**
A: Tidak. Selalu export dulu sebelum import.

**Q: File backup bisa diedit manual?**
A: Bisa, tapi hati-hati dengan syntax JSON.

---

## 🎓 Best Practice Summary

✅ **DO:**
- Export regularly
- Keep multiple backups
- Test imports
- Validate JSON
- Use cloud storage
- Document changes

❌ **DON'T:**
- Import without backup
- Edit JSON manually (unless expert)
- Rely on single backup
- Forget to export
- Clear browser without backup

---

**Remember:** Your data is valuable. Backup regularly! 💾

---

**Version:** 1.0.0  
**Last Updated:** 2026-05-14  
**Status:** ✅ Active
