# Portfolio Website - Budina Eka Prasetia

Modern portfolio website untuk Veterinary Officer & Spatial Data Scientist dengan admin panel untuk manage projects.

## 🚀 Live Demo

**GitHub Pages**: Deploy your portfolio for free!

## ✨ Features

### Portfolio Features
- 📱 **Fully Responsive** - Mobile-first design
- 🎨 **Modern UI** - Tailwind CSS dengan glassmorphism effects
- ✨ **Smooth Animations** - Fade-in, hover effects
- 🎯 **Bento Grid Layout** - Dynamic project cards
- 🏷️ **9 Categories** - Research, Mapping, WebGIS, ML, GenAI, AI Agents, dll
- 📊 **GitHub Contributions** - Live contribution graph
- 📄 **CV Download** - Direct download CV from navbar
- 🌐 **Static Site** - 100% compatible dengan GitHub Pages

### Admin Panel Features
- ✏️ **CRUD Operations** - Add, Edit, Delete projects
- 🔄 **Drag & Drop** - Reorder projects dengan mudah
- ⬆️⬇️ **Up/Down Buttons** - Alternative reorder method
- 💾 **Auto-Download** - Auto-download `projects.json` setelah save
- 📥 **Export/Import** - Backup dan restore data
- 🔄 **Reset to Default** - Restore default projects

## 🎯 Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (Vanilla)** - No framework dependencies
- **Phosphor Icons** - Modern icon library
- **Google Fonts (Outfit)** - Clean typography
- **GitHub Pages** - Free static hosting

## 📁 File Structure

```
portfolio/
├── index.html              # Main portfolio page
├── admin-projects.html     # Admin panel (edit projects)
├── projects.json           # ⭐ Data source
├── projects-data.js        # Frontend loader
├── style.css               # Custom styles
├── cv_myasn/              # 📄 CV folder
│   └── CV ASN - BUDINA EKA PRASETIA - 198402042010011019.pdf
├── img/
│   ├── me.jpg             # Profile photo
│   └── products/          # Project images
│       ├── 1.jpg
│       ├── 2.jpg
│       └── ...
├── GITHUB-PAGES-GUIDE.md  # 📖 Deployment guide
└── README.md
```

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/USERNAME/REPO-NAME.git
cd REPO-NAME
```

### 2. Open Locally

```bash
# Option A: Simple HTTP server
python -m http.server 8000

# Option B: Using npx
npx serve

# Option C: Using PHP
php -S localhost:8000
```

Open browser: `http://localhost:8000/`

### 3. Edit Projects

1. Open `http://localhost:8000/admin-projects.html`
2. Add/Edit/Delete projects
3. Download `projects.json` (auto-download setelah save)
4. Replace file di repository
5. Commit & push to GitHub

```bash
git add projects.json
git commit -m "Update projects"
git push origin main
```

### 4. Deploy to GitHub Pages

1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes
6. Site live at: `https://USERNAME.github.io/REPO-NAME/`

📖 **Detailed Guide**: See [GITHUB-PAGES-GUIDE.md](GITHUB-PAGES-GUIDE.md)

## ✏️ How to Edit Projects

### Via Admin Panel (Recommended)

1. Open `admin-projects.html` di browser
2. Click **"Add New Project"**
3. Fill form:
   - Title (required)
   - Description (optional)
   - Category (required)
   - Size: small/medium/large
   - Image path (required)
   - Link URL (optional)
4. Click **"Save Project"**
5. File `projects.json` akan auto-download
6. Commit file tersebut ke GitHub

### Manual Edit (Advanced)

Edit `projects.json` directly:

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

## 🎨 Categories

| Category | Label | Icon | Color |
|----------|-------|------|-------|
| `research` | Published Research | 🏆 | Emerald |
| `mapping` | Risk Mapping | 📍 | Blue |
| `webgis` | WebGIS | 🌐 | Cyan |
| `disaster` | Disaster Map | ⚠️ | Orange |
| `ml` | Machine Learning | 🌳 | Purple |
| `genai` | Generative AI | ✨ | Violet |
| `vibecoding` | Vibecoding | 💻 | Fuchsia |
| `aiagents` | AI Agents | 🤖 | Indigo |
| `other` | Other | 📁 | Slate |

## 📸 Add New Images

1. Prepare image (1200x800px recommended, <500KB)
2. Upload to `img/products/` folder
3. Commit to GitHub:

```bash
git add img/products/new-image.jpg
git commit -m "Add new project image"
git push origin main
```

4. Use path in admin panel: `img/products/new-image.jpg`

## 📄 Update CV File

1. Place your CV PDF in `cv_myasn/` folder
2. Filename must match: `CV ASN - BUDINA EKA PRASETIA - 198402042010011019.pdf`
3. Commit to GitHub:

```bash
git add cv_myasn/
git commit -m "Update CV file"
git push origin main
```

4. CV button will appear in navbar (after Projects link)

## 🔄 Backup & Restore

### Export Backup

```
Admin Panel → Export Backup → Save file
```

### Import Backup

```
Admin Panel → Import Data → Select file → Confirm
```

## 🐛 Troubleshooting

### Projects tidak muncul

- ✅ Check `projects.json` sudah ter-commit
- ✅ Clear browser cache (Ctrl+Shift+R)
- ✅ Wait 2-3 minutes untuk GitHub Pages rebuild

### CORS Error

- ❌ Jangan buka file HTML langsung (double-click)
- ✅ Gunakan HTTP server (python, npx serve, dll)

### Image tidak muncul

- ✅ Check path image (case-sensitive)
- ✅ Pastikan image sudah ter-commit
- ✅ Use relative path: `img/products/1.jpg`

## 📚 Documentation

- [GITHUB-PAGES-GUIDE.md](GITHUB-PAGES-GUIDE.md) - Complete deployment guide
- [ADMIN-GUIDE.md](ADMIN-GUIDE.md) - Admin panel usage
- [CATEGORY-EXAMPLES.md](CATEGORY-EXAMPLES.md) - Category usage examples
- [QUICK-REFERENCE.md](QUICK-REFERENCE.md) - Quick reference guide

## 🎯 Roadmap

- [x] Modern responsive design
- [x] Admin panel with CRUD
- [x] Drag & drop reorder
- [x] Export/Import backup
- [x] GitHub Pages compatible
- [x] Auto-download projects.json
- [ ] Dark mode toggle
- [ ] Search/filter projects
- [ ] Multi-language support

## 📝 License

MIT License - Feel free to use for your own portfolio!

## 👤 Author

**Drh. Budina Eka Prasetia, M.Sc**
- Veterinary Officer & Spatial Data Scientist
- Dinas Peternakan Kabupaten Sukabumi
- Email: budinaeka@gmail.com
- GitHub: [@budinaeka](https://github.com/budinaeka)

---

**Made with ❤️ using Tailwind CSS & Vanilla JavaScript**
