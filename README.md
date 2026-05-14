# Portfolio Website - Budina Eka Prasetia

Portfolio website modern untuk Drh. Budina Eka Prasetia, M.Sc - Veterinary Officer & Spatial Data Science Enthusiast.

## 🌟 Features

- ✨ Modern & responsive design
- 🎨 Glassmorphism effects
- 🎭 Smooth animations
- 📱 Mobile-first approach
- 🎯 Bento grid layout for projects
- ⚡ Fast & lightweight
- 🔧 Admin panel untuk manage projects

## 📁 File Structure

```
portfolio/
├── index.html              # Main portfolio page
├── admin-projects.html     # Admin panel (not linked in nav)
├── projects-data.js        # Dynamic projects loader
├── style.css              # Custom styles
├── img/
│   ├── me.jpg             # Profile photo
│   └── products/          # Project images
│       ├── 1.jpg
│       ├── 2.jpg
│       └── ...
├── ADMIN-GUIDE.md         # Admin panel documentation
└── README.md              # This file
```

## 🚀 Quick Start

1. **View Portfolio:**
   - Open `index.html` in browser
   - Navigate through sections: Home, About, Projects, Contact

2. **Manage Projects:**
   - Open `admin-projects.html` in browser
   - Add, edit, or delete projects
   - Changes automatically reflect on main page

## 🎨 Design Principles

Based on premium design guidelines:
- **Typography:** Outfit font family
- **Colors:** Cyan/Blue accent with neutral grays
- **Layout:** Asymmetric bento grid
- **Animations:** Smooth cubic-bezier easing
- **Icons:** Phosphor Icons
- **Effects:** Glassmorphism, floating shapes, micro-interactions

## 🔧 Admin Panel

Access admin panel at: `admin-projects.html`

**Features:**
- ➕ Add new projects
- ✏️ Edit existing projects
- 🗑️ Delete projects
- 📊 Manage categories & sizes
- 🖼️ Upload images
- 🔗 Add external links

**Data Storage:**
- Uses browser localStorage
- No backend required
- Data persists locally

See [ADMIN-GUIDE.md](ADMIN-GUIDE.md) for detailed documentation.

## 📸 Adding Images

1. Save images to `img/products/` folder
2. Recommended sizes:
   - Small card: 600x600px (1:1)
   - Medium card: 800x600px (4:3)
   - Large card: 1200x675px (16:9)
3. Use descriptive filenames
4. Reference in admin panel: `img/products/filename.jpg`

## 🎯 Project Categories

- **Published Research** - Academic publications
- **Risk Mapping** - Disease risk maps
- **WebGIS** - Web-based GIS applications
- **Disaster Map** - Disaster risk mapping
- **Machine Learning** - ML-based projects
- **Generative AI** - GenAI projects and experiments
- **Vibecoding** - Vibecoding projects
- **AI Agents** - AI agents (Autoclaw, Hermes, etc.)
- **Other** - Miscellaneous projects

## 🌐 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Dynamic content loading
- **Phosphor Icons** - Icon library
- **localStorage** - Client-side data storage

## 📱 Responsive Design

- **Mobile:** < 768px (single column)
- **Tablet:** 768px - 1024px (2 columns)
- **Desktop:** > 1024px (3 columns bento grid)

## ⚡ Performance

- Lightweight (no heavy frameworks)
- Fast loading times
- Optimized animations
- Hardware-accelerated transforms
- Lazy loading ready

## 🔒 Security Notes

- Admin panel not linked in navigation
- Consider adding authentication for production
- localStorage data is client-side only
- Backup data regularly

## 🎓 Sections

### 1. Hero
- Profile photo with glass effect
- Name and title
- Call-to-action buttons
- Stats cards
- Floating badge

### 2. About
- Education & career
- International training
- Skills grid with icons

### 3. Projects
- Dynamic bento grid layout
- Category badges
- Hover effects
- External links

### 4. Contact
- Contact information
- Contact form
- Social links ready

### 5. Footer
- Copyright info
- Quick links ready

## 🛠️ Customization

### Colors
Edit in `index.html` Tailwind config:
```javascript
colors: {
  primary: '#0ea5e9',  // Change primary color
  accent: '#06b6d4',   // Change accent color
}
```

### Fonts
Change in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

### Animations
Modify in `style.css`:
- Adjust animation durations
- Change easing functions
- Add new keyframes

## 📝 To-Do / Future Enhancements

- [ ] Add authentication to admin panel
- [ ] Implement backend database
- [ ] Add image upload functionality
- [ ] Export/import projects data
- [ ] Add search/filter in admin
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] PWA support

## 🐛 Known Issues

- localStorage data is browser-specific
- No data sync across devices
- Images must be uploaded manually via FTP/file manager

## 📞 Contact

**Drh. Budina Eka Prasetia, M.Sc**
- Email: budinaeka@gmail.com
- Location: Sukabumi, Indonesia
- Position: Dinas Peternakan Kab. Sukabumi

## 📄 License

Personal portfolio website. All rights reserved.

---

**Built with** ❤️ **in 2026**
