# 📄 CV Folder

## File Location

Place your CV PDF file in this folder with the exact filename:

```
CV ASN - BUDINA EKA PRASETIA - 198402042010011019.pdf
```

## Current Setup

The navbar has a "CV-MyASN" button that will download this file when clicked.

### Desktop Menu:
- Position: After "Projects" link, before "Contact Me" button
- Icon: PDF file icon
- Action: Download CV file

### Mobile Menu:
- Same position as desktop
- Same functionality

## File Requirements

- **Format**: PDF
- **Filename**: Must match exactly (including spaces)
- **Location**: `cv_myasn/` folder
- **Size**: Recommended < 5MB for fast download

## How to Update CV

1. Replace the PDF file in this folder
2. Keep the same filename, or update the filename in `index.html`:
   - Line ~30 (Desktop menu)
   - Line ~45 (Mobile menu)
3. Commit and push to GitHub

```bash
git add cv_myasn/
git commit -m "Update CV file"
git push origin main
```

## Testing

1. **Local Test:**
   ```bash
   python -m http.server 8000
   ```
   Open: `http://localhost:8000/`
   Click "CV-MyASN" button

2. **GitHub Pages:**
   After pushing, wait 1-2 minutes for deployment
   Click "CV-MyASN" button on live site

## Troubleshooting

### CV button doesn't work
- ✅ Check file exists in `cv_myasn/` folder
- ✅ Check filename matches exactly (case-sensitive)
- ✅ Check file is committed to GitHub
- ✅ Clear browser cache (Ctrl+Shift+R)

### File not downloading
- ✅ Check file size (should be < 10MB)
- ✅ Check file is valid PDF
- ✅ Try different browser

### 404 Error on GitHub Pages
- ✅ Verify file is in repository
- ✅ Check path is correct: `cv_myasn/filename.pdf`
- ✅ Wait for GitHub Pages rebuild (1-2 minutes)

---

**Note:** Make sure to add your actual CV file to this folder before deploying!
