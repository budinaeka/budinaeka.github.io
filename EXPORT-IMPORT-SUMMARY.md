# 📦 Export/Import Feature - Quick Summary

Fitur backup dan restore untuk data projects portfolio.

---

## ✨ Fitur yang Ditambahkan

### 1. **Export Data** 📥
- **Button:** "Export Data" (Download icon)
- **Function:** Download backup JSON file
- **Filename:** `portfolio-projects-YYYY-MM-DD.json`
- **Use Case:** Backup data secara manual

### 2. **Import Data** 📤
- **Button:** "Import Data" (Upload icon)
- **Function:** Restore dari backup file
- **File Type:** `.json` only
- **Use Case:** Restore data dari backup

### 3. **Reset to Default** 🔄
- **Button:** "Reset to Default" (Red button)
- **Function:** Kembali ke 5 default projects
- **Warning:** Tidak bisa undo!
- **Use Case:** Fresh start atau testing

---

## 🎯 Quick Guide

### Export (Backup):
```
1. Buka admin-projects.html
2. Klik "Export Data"
3. File terdownload otomatis
4. Simpan di tempat aman
```

### Import (Restore):
```
1. Buka admin-projects.html
2. Klik "Import Data"
3. Pilih file JSON
4. Konfirmasi import
5. Data ter-restore
```

### Reset:
```
1. Buka admin-projects.html
2. Klik "Reset to Default"
3. Konfirmasi reset
4. Kembali ke default
```

---

## 🔧 Technical Details

### Export Function:
```javascript
function exportProjects() {
  // Get data from localStorage
  const data = localStorage.getItem('portfolioProjects');
  
  // Create blob and download
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  // Generate filename with timestamp
  const timestamp = new Date().toISOString().split('T')[0];
  const filename = `portfolio-projects-${timestamp}.json`;
  
  // Trigger download
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
}
```

### Import Function:
```javascript
function importProjects(event) {
  const file = event.target.files[0];
  
  // Validate file type
  if (!file.name.endsWith('.json')) {
    alert('Please select a valid JSON file!');
    return;
  }
  
  // Confirm before importing
  if (!confirm('This will replace all current projects. Continue?')) {
    return;
  }
  
  // Read and parse file
  const reader = new FileReader();
  reader.onload = function(e) {
    const importedData = JSON.parse(e.target.result);
    
    // Validate data structure
    // Save to localStorage
    localStorage.setItem('portfolioProjects', JSON.stringify(importedData));
    
    // Re-render
    renderProjects();
  };
  
  reader.readAsText(file);
}
```

### Reset Function:
```javascript
function resetToDefault() {
  if (!confirm('Reset to default? Cannot be undone!')) {
    return;
  }
  
  // Default projects array
  const defaultProjects = [...];
  
  // Save and re-render
  localStorage.setItem('portfolioProjects', JSON.stringify(defaultProjects));
  projects = defaultProjects;
  renderProjects();
}
```

---

## 📋 File Format

### JSON Structure:
```json
[
  {
    "id": 1,
    "title": "Project Title",
    "description": "Description",
    "category": "research",
    "size": "large",
    "image": "img/products/1.jpg",
    "link": "https://example.com"
  }
]
```

### Validation Rules:
- ✅ Must be valid JSON array
- ✅ Each project must have: id, title, category, size, image
- ✅ Category must be valid (research, mapping, webgis, etc.)
- ✅ Size must be: small, medium, or large

---

## 🎨 UI Components

### Button Styles:

**Export Button:**
```html
<button onclick="exportProjects()" class="btn-secondary">
  <i class="ph ph-download-simple text-lg"></i>
  Export Data
</button>
```

**Import Button:**
```html
<label class="btn-secondary cursor-pointer">
  <i class="ph ph-upload-simple text-lg"></i>
  Import Data
  <input type="file" accept=".json" onchange="importProjects(event)" class="hidden" />
</label>
```

**Reset Button:**
```html
<button onclick="resetToDefault()" class="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 ...">
  <i class="ph ph-arrow-counter-clockwise text-lg"></i>
  Reset to Default
</button>
```

---

## 💡 Best Practices

### When to Export:
- ✅ Before importing new data
- ✅ Before resetting to default
- ✅ Weekly (if frequently updated)
- ✅ Before clearing browser data
- ✅ After adding important projects

### Where to Store Backups:
- 📁 Local: Desktop/Documents/Backups/
- ☁️ Cloud: Google Drive, Dropbox, OneDrive
- 🔧 Git: Commit to repository
- 💾 Multiple locations (3-2-1 rule)

### Naming Convention:
```
portfolio-projects-2026-05-14.json          (auto)
portfolio-projects-2026-05-14-v2.json       (manual)
portfolio-projects-backup-before-import.json (descriptive)
```

---

## ⚠️ Important Warnings

### Import Warning:
- ❌ **Will replace ALL current data**
- ❌ **Cannot be undone**
- ✅ **Always export first before import**

### Reset Warning:
- ❌ **Will delete ALL custom projects**
- ❌ **Cannot be undone**
- ✅ **Export first if you want to keep data**

### File Validation:
- ❌ Only `.json` files accepted
- ❌ Must be valid JSON format
- ❌ Must have correct data structure
- ✅ Use exported files for guaranteed compatibility

---

## 🐛 Error Handling

### Export Errors:
```javascript
// No data to export
if (!data) {
  alert('No projects data to export!');
  return;
}
```

### Import Errors:
```javascript
// Invalid file type
if (!file.name.endsWith('.json')) {
  alert('Please select a valid JSON file!');
  return;
}

// Invalid JSON
try {
  const importedData = JSON.parse(e.target.result);
} catch (error) {
  alert('Error importing file: ' + error.message);
}

// Invalid structure
if (!Array.isArray(importedData)) {
  throw new Error('Invalid data format');
}
```

---

## 📊 Feature Comparison

| Feature | Before | After |
|---------|--------|-------|
| Backup | Manual console | One-click export |
| Restore | Manual paste | File upload |
| Reset | Delete manually | One-click reset |
| Validation | None | Automatic |
| User-friendly | ❌ No | ✅ Yes |

---

## 🎯 Use Cases

### Use Case 1: Regular Backup
```
User: Content manager
Frequency: Weekly
Action: Export data every Monday
Storage: Google Drive
```

### Use Case 2: Device Migration
```
User: Developer
Scenario: New computer
Action: 
  1. Export from old device
  2. Import to new device
  3. Verify data
```

### Use Case 3: Testing
```
User: Developer
Scenario: Testing new features
Action:
  1. Export current data
  2. Reset to default
  3. Test features
  4. Import backup
```

### Use Case 4: Collaboration
```
User: Team member
Scenario: Share projects
Action:
  1. Export data
  2. Send file to team
  3. Team imports
  4. Everyone has same data
```

---

## 📈 Future Enhancements

### Planned Features:
- [ ] Auto-backup (daily/weekly)
- [ ] Cloud sync (Google Drive API)
- [ ] Version history
- [ ] Diff viewer (compare backups)
- [ ] Batch operations
- [ ] CSV export/import
- [ ] Backup encryption

### Nice to Have:
- [ ] Drag & drop import
- [ ] Preview before import
- [ ] Merge data (not replace)
- [ ] Selective import (choose projects)
- [ ] Backup to GitHub Gist
- [ ] Scheduled backups

---

## 📚 Related Documentation

- [BACKUP-GUIDE.md](BACKUP-GUIDE.md) - Complete backup guide
- [ADMIN-GUIDE.md](ADMIN-GUIDE.md) - Admin panel guide
- [README.md](README.md) - Project overview

---

## ✅ Testing Checklist

### Export Testing:
- [x] Export with data
- [x] Export without data
- [x] Filename format correct
- [x] File downloads successfully
- [x] JSON format valid
- [x] Toast notification shows

### Import Testing:
- [x] Import valid JSON
- [x] Import invalid JSON
- [x] Import non-JSON file
- [x] Confirmation dialog shows
- [x] Data replaces correctly
- [x] UI updates after import
- [x] Toast notification shows

### Reset Testing:
- [x] Reset with confirmation
- [x] Reset without confirmation
- [x] Default projects load
- [x] UI updates correctly
- [x] Toast notification shows

---

## 🎉 Summary

**What's New:**
- ✅ One-click export to JSON
- ✅ One-click import from JSON
- ✅ One-click reset to default
- ✅ Automatic validation
- ✅ User-friendly UI
- ✅ Error handling
- ✅ Toast notifications
- ✅ Comprehensive documentation

**Benefits:**
- 💾 Easy data backup
- 🔄 Quick data restore
- 🛡️ Data safety
- 📱 Device migration
- 👥 Data sharing
- 🧪 Safe testing

**Files Modified:**
- `admin-projects.html` - Added UI and functions
- `ADMIN-GUIDE.md` - Updated documentation
- `BACKUP-GUIDE.md` - New comprehensive guide
- `EXPORT-IMPORT-SUMMARY.md` - This file

---

**Feature Status:** ✅ Complete & Tested  
**Version:** 1.0.0  
**Date:** 2026-05-14
