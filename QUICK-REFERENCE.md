# Quick Reference - Portfolio Admin

## 🎨 Category Quick Reference

### Traditional Categories

| Code | Label | Color | Icon | Use For |
|------|-------|-------|------|---------|
| `research` | Published Research | 🟢 Emerald | seal-check | Academic papers, journals |
| `mapping` | Risk Mapping | 🔵 Blue | map-pin | Disease risk maps |
| `webgis` | WebGIS | 🔷 Cyan | globe | Web GIS apps |
| `disaster` | Disaster Map | 🟠 Orange | warning | Disaster risk maps |
| `ml` | Machine Learning | 🟣 Purple | tree-structure | ML models, predictions |

### New AI Categories

| Code | Label | Color | Icon | Use For |
|------|-------|-------|------|---------|
| `genai` | Generative AI | 🟪 Violet | sparkle | LLM apps, GenAI projects |
| `vibecoding` | Vibecoding | 🎀 Fuchsia | code | Creative coding, experiments |
| `aiagents` | AI Agents | 🔮 Indigo | robot | Bots, automation, agents |

### Generic

| Code | Label | Color | Icon | Use For |
|------|-------|-------|------|---------|
| `other` | Other | ⚪ Slate | folder | Miscellaneous |

---

## 📏 Card Sizes

| Size | Grid Span | Best For | Aspect Ratio |
|------|-----------|----------|--------------|
| **Small** | 1 column | Quick demos, tools | 1:1 (square) |
| **Medium** | 1 column (taller) | Standard projects | 4:3 |
| **Large** | 2 columns | Featured projects | 16:9 |

---

## 🎯 Quick Decision Tree

### "What category should I use?"

```
Is it published in a journal?
├─ YES → research
└─ NO ↓

Does it use AI/ML?
├─ YES ↓
│   ├─ Uses LLM/GenAI? → genai
│   ├─ Autonomous agent/bot? → aiagents
│   ├─ Traditional ML? → ml
│   └─ Creative/experimental? → vibecoding
└─ NO ↓

Is it a map/GIS?
├─ YES ↓
│   ├─ Interactive web map? → webgis
│   ├─ Risk/disease map? → mapping
│   └─ Disaster related? → disaster
└─ NO → other
```

---

## 💡 Common Combinations

### Research + ML
```
Category: research (primary)
Mention ML in description
Link to code/model if available
```

### WebGIS + AI
```
Category: webgis (if map is primary)
Category: genai (if AI is primary)
Mention both in description
```

### Vibecoding + GenAI
```
Category: vibecoding (if creative focus)
Category: genai (if AI is core)
Choose based on main innovation
```

---

## 🚀 Quick Add Examples

### Example 1: Simple WebGIS
```
Title: Livestock Location Map
Category: webgis
Size: small
Image: img/products/livestock-map.jpg
Link: https://map.example.com
Description: (leave empty for small cards)
```

### Example 2: AI Chatbot
```
Title: Hermes Vet Assistant
Category: aiagents
Size: medium
Image: img/products/hermes-bot.jpg
Link: https://hermes.example.com
Description: AI-powered veterinary consultation chatbot
```

### Example 3: GenAI Research Tool
```
Title: Research Paper Analyzer
Category: genai
Size: large
Image: img/products/paper-analyzer.jpg
Link: https://analyzer.example.com
Description: LLM-based tool for analyzing and summarizing veterinary research papers using GPT-4
```

### Example 4: Creative Visualization
```
Title: Disease Pattern Art
Category: vibecoding
Size: small
Image: img/products/pattern-art.jpg
Link: https://art.example.com
Description: (optional)
```

---

## 🎨 Color Palette Reference

### Tailwind Color Classes

```css
/* Emerald (Research) */
bg-emerald-50, text-emerald-700

/* Blue (Risk Mapping) */
bg-blue-50, text-blue-700

/* Cyan (WebGIS) */
bg-cyan-50, text-cyan-700

/* Orange (Disaster) */
bg-orange-50, text-orange-700

/* Purple (ML) */
bg-purple-50, text-purple-700

/* Violet (GenAI) */
bg-violet-50, text-violet-700

/* Fuchsia (Vibecoding) */
bg-fuchsia-50, text-fuchsia-700

/* Indigo (AI Agents) */
bg-indigo-50, text-indigo-700

/* Slate (Other) */
bg-slate-50, text-slate-700
```

---

## 📝 Field Requirements

| Field | Required | Notes |
|-------|----------|-------|
| Title | ✅ Yes | Keep concise (< 60 chars) |
| Description | ❌ No | Optional for small cards |
| Category | ✅ Yes | Choose from dropdown |
| Size | ✅ Yes | small/medium/large |
| Image | ✅ Yes | Path: img/products/filename.jpg |
| Link | ❌ No | External URL (optional) |

---

## 🔧 Troubleshooting

### Badge not showing correct color?
- Check category code spelling
- Clear browser cache
- Verify style.css is loaded

### Image not displaying?
- Verify file exists in img/products/
- Check path spelling (case-sensitive)
- Use relative path from root

### Changes not appearing on main page?
- Refresh index.html (Ctrl+F5)
- Check browser console for errors
- Verify projects-data.js is loaded

---

## 🎯 Best Practices Checklist

- [ ] Use descriptive, concise titles
- [ ] Choose appropriate category
- [ ] Select right card size for content
- [ ] Optimize images (< 500KB)
- [ ] Add description for medium/large cards
- [ ] Include links when available
- [ ] Test on mobile view
- [ ] Maintain visual balance in grid

---

## 📱 Mobile Considerations

- All cards become single column on mobile
- Large cards lose 2-column advantage
- Keep titles short (< 40 chars for mobile)
- Ensure images work in square format
- Test touch interactions

---

## 🔐 Admin Access

**URL:** `admin-projects.html`  
**Not linked in navigation** (direct access only)

**Keyboard Shortcuts:**
- `Esc` - Close modal
- `Enter` - Submit form (when focused)

---

**Quick Tip:** Start with 1 large featured project, then mix medium and small cards for visual variety!

---

**Version:** 2.0.0  
**Last Updated:** 2026
