# ⚡ Quick Start Guide

## 🎯 Goal
Deploy portfolio website ke GitHub Pages dalam 5 menit!

---

## 📋 Prerequisites

- GitHub account
- Git installed
- Text editor (VS Code, Sublime, dll)

---

## 🚀 Step-by-Step

### 1️⃣ Create GitHub Repository (2 min)

```bash
# Di folder project
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

**Replace:**
- `USERNAME` dengan GitHub username kamu
- `REPO-NAME` dengan nama repository (contoh: `portfolio`)

---

### 2️⃣ Enable GitHub Pages (1 min)

1. Buka repository di GitHub
2. **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** → folder: **/ (root)**
5. Click **Save**

✅ Site akan live di: `https://USERNAME.github.io/REPO-NAME/`

Wait 1-2 minutes untuk build selesai.

---

### 3️⃣ Edit Projects (2 min)

**Local editing:**

```bash
# Start local server
python -m http.server 8000
# atau
npx serve
```

Open: `http://localhost:8000/admin-projects.html`

**Edit projects:**
1. Click **"Add New Project"**
2. Fill form
3. Click **"Save Project"**
4. File `projects.json` akan auto-download

**Commit changes:**

```bash
# Copy downloaded projects.json ke folder project
git add projects.json
git commit -m "Update projects"
git push origin main
```

Wait 1-2 minutes → Refresh GitHub Pages → Done! ✅

---

## 🎨 Add Images

```bash
# Copy image ke folder
cp ~/Downloads/my-project.jpg img/products/6.jpg

# Commit
git add img/products/6.jpg
git commit -m "Add project image"
git push origin main
```

Use in admin panel: `img/products/6.jpg`

---

## 🔄 Workflow Summary

```
Edit di Admin Panel → Download projects.json → Commit to GitHub → GitHub Pages Auto-Update
```

---

## 📱 Test Locally

```bash
# Start server
python -m http.server 8000

# Open browser
http://localhost:8000/              # Portfolio
http://localhost:8000/admin-projects.html  # Admin
```

---

## 🐛 Common Issues

### ❌ Projects tidak muncul
```bash
# Clear cache
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### ❌ CORS Error
```bash
# Jangan double-click HTML file
# Gunakan HTTP server:
python -m http.server 8000
```

### ❌ Image tidak muncul
- Check path: `img/products/1.jpg` (case-sensitive)
- Pastikan image sudah ter-commit
- Use relative path (bukan absolute)

---

## 📖 Need More Help?

- **Full Guide**: [GITHUB-PAGES-GUIDE.md](GITHUB-PAGES-GUIDE.md)
- **Admin Guide**: [ADMIN-GUIDE.md](ADMIN-GUIDE.md)
- **Categories**: [CATEGORY-EXAMPLES.md](CATEGORY-EXAMPLES.md)

---

## ✅ Checklist

- [ ] Create GitHub repository
- [ ] Enable GitHub Pages
- [ ] Test locally
- [ ] Edit projects via admin panel
- [ ] Download projects.json
- [ ] Commit & push to GitHub
- [ ] Verify live site
- [ ] Add custom images
- [ ] Share portfolio URL! 🎉

---

**That's it! Your portfolio is now live! 🚀**
