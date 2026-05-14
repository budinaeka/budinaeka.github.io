# 🚀 GitHub Pages Deployment Guide

## Overview

Portfolio ini sekarang **100% static** dan siap di-deploy ke **GitHub Pages** tanpa memerlukan PHP server. Semua data projects disimpan di file `projects.json` yang bisa di-edit melalui admin panel.

---

## 📋 Cara Kerja System

```
Admin Panel (Local) → Edit Projects → Download projects.json → Commit to GitHub → GitHub Pages Auto-Update
```

### Flow Detail:
1. **Edit di Admin Panel** (`admin-projects.html`) - buka di browser lokal
2. **Auto-Download** - setiap save/edit akan otomatis download `projects.json`
3. **Replace File** - ganti file `projects.json` di repository dengan yang baru
4. **Commit & Push** - push ke GitHub
5. **GitHub Pages Update** - otomatis update dalam 1-2 menit

---

## 🎯 Setup GitHub Pages

### 1. Create GitHub Repository

```bash
# Di folder project
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Buka repository di GitHub
2. Go to **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** → folder: **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes
7. Your site will be live at: `https://USERNAME.github.io/REPO-NAME/`

---

## ✏️ Edit Projects (Workflow)

### Step 1: Open Admin Panel Locally

```bash
# Option A: Open directly in browser
# Double-click admin-projects.html

# Option B: Use simple HTTP server (recommended)
python -m http.server 8000
# or
npx serve
```

Open: `http://localhost:8000/admin-projects.html`

### Step 2: Edit Projects

- **Add New Project** - klik tombol "Add New Project"
- **Edit Project** - klik icon pensil
- **Delete Project** - klik icon trash
- **Reorder** - drag & drop atau gunakan tombol Up/Down

### Step 3: Download Updated File

Setiap kali save/edit, file `projects.json` akan **otomatis ter-download**.

Atau klik tombol **"Download projects.json"** untuk download manual.

### Step 4: Commit to GitHub

```bash
# Replace file projects.json dengan yang baru di-download
# (copy dari Downloads folder ke project folder)

git add projects.json
git commit -m "Update projects data"
git push origin main
```

### Step 5: Wait for GitHub Pages Update

GitHub Pages akan otomatis rebuild dan update dalam **1-2 menit**.

Refresh browser untuk melihat perubahan.

---

## 📁 File Structure

```
portfolio/
├── index.html              # Main portfolio page
├── admin-projects.html     # Admin panel (edit projects)
├── projects.json           # ⭐ Data source (edit via admin)
├── projects-data.js        # Frontend loader
├── style.css               # Styles
├── img/
│   ├── me.jpg
│   └── products/
│       ├── 1.jpg
│       ├── 2.jpg
│       └── ...
└── README.md
```

---

## 🔧 Features

### ✅ Admin Panel Features

- ✏️ **Add/Edit/Delete** projects
- 🔄 **Drag & Drop** reorder
- ⬆️⬇️ **Up/Down buttons** untuk reorder
- 💾 **Auto-download** `projects.json` setelah save
- 📥 **Export/Import** backup
- 🔄 **Reset to Default** projects

### ✅ Portfolio Features

- 📱 **Fully Responsive** design
- 🎨 **Modern UI** dengan Tailwind CSS
- ✨ **Smooth Animations**
- 🎯 **Bento Grid** layout
- 🏷️ **9 Categories** (Research, Mapping, WebGIS, Disaster, ML, GenAI, Vibecoding, AI Agents, Other)
- 🔗 **GitHub Contributions** graph

---

## 🎨 Add New Project Images

### 1. Prepare Image

- **Format**: JPG, PNG, WebP
- **Size**: Recommended 1200x800px (landscape) atau 800x800px (square)
- **Optimize**: Compress untuk web (<500KB)

### 2. Upload to Repository

```bash
# Copy image ke folder img/products/
cp ~/Downloads/my-project.jpg img/products/6.jpg

# Commit
git add img/products/6.jpg
git commit -m "Add new project image"
git push origin main
```

### 3. Use in Admin Panel

Di admin panel, masukkan path: `img/products/6.jpg`

---

## 🔄 Backup & Restore

### Export Backup

1. Open admin panel
2. Click **"Export Backup"**
3. Save file: `portfolio-projects-YYYY-MM-DD.json`

### Import Backup

1. Open admin panel
2. Click **"Import Data"**
3. Select backup file
4. Confirm import
5. Download updated `projects.json`
6. Commit to GitHub

---

## 🐛 Troubleshooting

### Projects tidak muncul di GitHub Pages

**Solusi:**
1. Pastikan `projects.json` sudah ter-commit
2. Check file path di `projects-data.js` (harus `projects.json`)
3. Clear browser cache (Ctrl+Shift+R)
4. Wait 2-3 minutes untuk GitHub Pages rebuild

### Admin panel tidak bisa save

**Solusi:**
1. Admin panel hanya untuk edit **lokal**
2. Setelah edit, **download** `projects.json`
3. **Commit** file tersebut ke GitHub
4. Jangan expect auto-save ke GitHub (butuh manual commit)

### Image tidak muncul

**Solusi:**
1. Check path image di `projects.json` (case-sensitive)
2. Pastikan image sudah ter-commit ke GitHub
3. Path harus relative: `img/products/1.jpg` (bukan absolute path)

### CORS error saat load projects.json

**Solusi:**
1. Jangan buka file HTML langsung (double-click)
2. Gunakan HTTP server:
   ```bash
   python -m http.server 8000
   # atau
   npx serve
   ```
3. Open: `http://localhost:8000/`

---

## 📊 Data Format (projects.json)

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
  }
]
```

### Field Descriptions:

- **id**: Unique number (auto-generated)
- **title**: Project name (required)
- **description**: Brief description (optional)
- **category**: One of: `research`, `mapping`, `webgis`, `disaster`, `ml`, `genai`, `vibecoding`, `aiagents`, `other`
- **size**: Card size - `small`, `medium`, `large`
- **image**: Path to image file (required)
- **link**: External URL (optional, leave empty string if none)

---

## 🎯 Categories

| Category | Label | Icon | Color | Use Case |
|----------|-------|------|-------|----------|
| `research` | Published Research | seal-check | emerald | Academic papers, publications |
| `mapping` | Risk Mapping | map-pin | blue | Disease risk maps |
| `webgis` | WebGIS | globe | cyan | Web-based GIS applications |
| `disaster` | Disaster Map | warning | orange | Disaster risk mapping |
| `ml` | Machine Learning | tree-structure | purple | ML/AI models |
| `genai` | Generative AI | sparkle | violet | LLMs, GenAI projects |
| `vibecoding` | Vibecoding | code | fuchsia | Creative coding |
| `aiagents` | AI Agents | robot | indigo | Autoclaw, Hermes, bots |
| `other` | Other | folder | slate | Miscellaneous |

---

## 🚀 Quick Start Checklist

- [ ] Create GitHub repository
- [ ] Enable GitHub Pages
- [ ] Open `admin-projects.html` locally
- [ ] Edit projects
- [ ] Download `projects.json`
- [ ] Commit & push to GitHub
- [ ] Wait 1-2 minutes
- [ ] Check live site
- [ ] ✅ Done!

---

## 📝 Tips

1. **Regular Backups**: Export backup setiap minggu
2. **Image Optimization**: Compress images sebelum upload
3. **Commit Messages**: Gunakan descriptive commit messages
4. **Test Locally**: Test di localhost sebelum push
5. **Browser Cache**: Clear cache jika perubahan tidak muncul

---

## 🔗 Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Phosphor Icons](https://phosphoricons.com/)

---

## 📞 Support

Jika ada masalah:
1. Check troubleshooting section di atas
2. Check browser console untuk error messages
3. Verify `projects.json` format (valid JSON)
4. Test di localhost dulu sebelum push

---

**Happy Coding! 🎉**
