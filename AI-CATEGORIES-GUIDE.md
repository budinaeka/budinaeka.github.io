# AI Categories Guide

Panduan lengkap untuk kategori AI yang baru ditambahkan: Generative AI, Vibecoding, dan AI Agents.

---

## 🤖 1. Generative AI

### Definisi
Project yang menggunakan Large Language Models (LLMs) atau teknologi generative AI untuk menghasilkan konten, analisis, atau solusi.

### Teknologi yang Termasuk
- **LLMs:** GPT-4, Claude, Gemini, LLaMA
- **Image Generation:** DALL-E, Midjourney, Stable Diffusion
- **Code Generation:** GitHub Copilot, Cursor, Windsurf
- **Audio/Video:** ElevenLabs, Runway, Sora

### Use Cases untuk Veterinary/Spatial Data
1. **Automated Report Generation**
   - Generate laporan surveillance otomatis
   - Summarize research papers
   - Create educational content

2. **Data Analysis Assistant**
   - Natural language queries untuk database
   - Explain complex spatial patterns
   - Generate insights dari data

3. **Content Creation**
   - Generate training materials
   - Create infographics descriptions
   - Write technical documentation

4. **Research Tools**
   - Literature review assistant
   - Hypothesis generation
   - Methodology suggestions

### Example Projects
```
Title: VetGPT - AI Research Assistant
Description: LLM-powered tool that helps veterinarians analyze research papers and generate evidence-based recommendations
Tech Stack: GPT-4 API, Python, Streamlit
Category: genai
Size: large
```

```
Title: Disease Report Generator
Description: Automated weekly surveillance report generation using Claude AI
Tech Stack: Claude API, Node.js
Category: genai
Size: medium
```

### Best Practices
- ✅ Mention specific LLM used (GPT-4, Claude, etc.)
- ✅ Highlight unique prompting strategies
- ✅ Show before/after examples
- ✅ Discuss accuracy/validation methods
- ❌ Don't oversell AI capabilities
- ❌ Don't ignore limitations

---

## 💫 2. Vibecoding

### Definisi
Pendekatan coding yang menggabungkan kreativitas, eksperimen, dan rapid prototyping. Fokus pada aesthetic, user experience, dan innovative interactions.

### Karakteristik Vibecoding
- **Creative First:** Prioritas pada visual appeal dan UX
- **Experimental:** Mencoba teknologi/teknik baru
- **Rapid Prototyping:** Quick iterations, fail fast
- **Aesthetic Focus:** Beautiful code, beautiful output
- **Playful:** Fun, engaging, memorable

### Teknologi yang Cocok
- **Frontend Frameworks:** React, Vue, Svelte
- **Animation Libraries:** Framer Motion, GSAP, Three.js
- **Creative Tools:** p5.js, D3.js, Canvas API
- **Modern CSS:** Tailwind, CSS Grid, Animations
- **WebGL/3D:** Three.js, Babylon.js

### Use Cases untuk Veterinary/Spatial Data
1. **Interactive Visualizations**
   - Animated disease spread maps
   - 3D terrain visualization
   - Particle-based data representation

2. **Creative Dashboards**
   - Unconventional data displays
   - Gamified interfaces
   - Artistic data storytelling

3. **Experimental UIs**
   - Novel interaction patterns
   - Immersive experiences
   - Micro-interactions showcase

4. **Generative Art**
   - Data-driven art pieces
   - Pattern visualization
   - Abstract representations

### Example Projects
```
Title: Disease Constellation
Description: Interactive 3D visualization of disease patterns as a constellation of connected nodes
Tech Stack: Three.js, React, Framer Motion
Category: vibecoding
Size: large
```

```
Title: Liquid Data Dashboard
Description: Experimental dashboard with fluid animations and organic transitions
Tech Stack: GSAP, Canvas API, Vue
Category: vibecoding
Size: medium
```

### Best Practices
- ✅ Showcase visual/aesthetic appeal
- ✅ Include live demo or video
- ✅ Explain creative decisions
- ✅ Highlight innovative techniques
- ✅ Balance beauty with usability
- ❌ Don't sacrifice accessibility
- ❌ Don't ignore performance

### Vibecoding vs Traditional Coding

| Aspect | Traditional | Vibecoding |
|--------|-------------|------------|
| Focus | Functionality | Experience |
| Process | Plan → Build | Explore → Iterate |
| Success Metric | Works correctly | Feels right |
| Constraints | Requirements | Creativity |
| Timeline | Structured | Fluid |

---

## 🤖 3. AI Agents

### Definisi
Autonomous systems yang dapat melakukan tugas secara mandiri, membuat keputusan, dan berinteraksi dengan environment atau users.

### Jenis AI Agents
1. **Chatbots/Conversational Agents**
   - Customer service bots
   - Virtual assistants
   - Q&A systems

2. **Task Automation Agents**
   - Data collection bots
   - Report generation agents
   - Monitoring systems

3. **Decision-Making Agents**
   - Recommendation systems
   - Diagnostic assistants
   - Risk assessment agents

4. **Multi-Agent Systems**
   - Collaborative agents
   - Agent orchestration
   - Swarm intelligence

### Popular Frameworks & Tools

#### Autoclaw
- **Type:** AI coding assistant
- **Use:** Code review, bug detection, refactoring
- **Best For:** Development automation

#### Hermes
- **Type:** Communication agent
- **Use:** Message routing, notifications, alerts
- **Best For:** Information distribution

#### LangChain
- **Type:** Agent framework
- **Use:** Building LLM-powered agents
- **Best For:** Complex agent workflows

#### AutoGPT
- **Type:** Autonomous agent
- **Use:** Goal-oriented task completion
- **Best For:** Multi-step automation

#### CrewAI
- **Type:** Multi-agent framework
- **Use:** Collaborative agent systems
- **Best For:** Team-based automation

### Use Cases untuk Veterinary/Spatial Data
1. **Surveillance Bots**
   - Automated disease monitoring
   - Alert generation
   - Data collection from multiple sources

2. **Consultation Agents**
   - Virtual vet assistant
   - Diagnostic support
   - Treatment recommendations

3. **Data Processing Agents**
   - Automated data cleaning
   - Quality control checks
   - Report generation

4. **Research Agents**
   - Literature monitoring
   - Citation tracking
   - Trend analysis

### Example Projects
```
Title: Hermes - Disease Alert System
Description: Autonomous agent that monitors disease data and sends targeted alerts to stakeholders
Tech Stack: LangChain, Python, Telegram API
Category: aiagents
Size: medium
```

```
Title: Autoclaw Code Reviewer
Description: AI agent that automatically reviews GIS code for best practices and potential bugs
Tech Stack: GPT-4, GitHub API, Python
Category: aiagents
Size: small
```

```
Title: VetBot - Consultation Assistant
Description: Multi-agent system that helps veterinarians with diagnosis and treatment planning
Tech Stack: CrewAI, Claude, FastAPI
Category: aiagents
Size: large
```

### Best Practices
- ✅ Define clear agent capabilities
- ✅ Explain decision-making process
- ✅ Show example interactions
- ✅ Discuss safety/validation
- ✅ Mention human-in-the-loop
- ❌ Don't claim full autonomy
- ❌ Don't ignore edge cases

### Agent Architecture Components

```
┌─────────────────────────────────────┐
│         User Interface              │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      Agent Orchestrator             │
│  (LangChain, AutoGPT, CrewAI)       │
└──────────────┬──────────────────────┘
               │
    ┌──────────┼──────────┐
    │          │          │
┌───▼───┐  ┌──▼───┐  ┌──▼───┐
│ LLM   │  │Tools │  │Memory│
│(GPT-4)│  │(APIs)│  │(DB)  │
└───────┘  └──────┘  └──────┘
```

---

## 🎯 Choosing Between AI Categories

### Decision Matrix

| If your project... | Choose |
|-------------------|--------|
| Generates text/images/content | Generative AI |
| Focuses on creative/aesthetic | Vibecoding |
| Automates tasks autonomously | AI Agents |
| Uses ML for predictions | Machine Learning |

### Overlap Scenarios

**GenAI + AI Agents**
- Agent uses LLM for reasoning
- **Choose:** AI Agents (if autonomous)
- **Choose:** GenAI (if generation is primary)

**Vibecoding + GenAI**
- Creative UI with AI features
- **Choose:** Vibecoding (if UX is focus)
- **Choose:** GenAI (if AI is core innovation)

**AI Agents + ML**
- Agent uses ML models
- **Choose:** AI Agents (if autonomous behavior)
- **Choose:** ML (if model is the innovation)

---

## 📊 Project Examples by Complexity

### Beginner Level
- **GenAI:** Simple chatbot with GPT API
- **Vibecoding:** Animated data cards
- **AI Agents:** Scheduled notification bot

### Intermediate Level
- **GenAI:** Custom-trained text classifier
- **Vibecoding:** Interactive 3D map
- **AI Agents:** Multi-step automation workflow

### Advanced Level
- **GenAI:** Fine-tuned LLM for domain
- **Vibecoding:** WebGL-based visualization
- **AI Agents:** Multi-agent orchestration system

---

## 🚀 Getting Started

### For Generative AI
1. Choose LLM provider (OpenAI, Anthropic, Google)
2. Get API key
3. Design prompts
4. Build interface
5. Test and validate

### For Vibecoding
1. Choose creative direction
2. Select tech stack
3. Rapid prototype
4. Iterate on feel
5. Polish and optimize

### For AI Agents
1. Define agent goals
2. Choose framework
3. Design agent architecture
4. Implement tools/actions
5. Test autonomy

---

## 📚 Learning Resources

### Generative AI
- OpenAI Cookbook
- Anthropic Claude docs
- Prompt Engineering Guide
- LangChain documentation

### Vibecoding
- Awwwards (inspiration)
- Codrops tutorials
- Three.js journey
- Creative Coding courses

### AI Agents
- LangChain tutorials
- AutoGPT documentation
- CrewAI examples
- Agent design patterns

---

## 💡 Pro Tips

1. **Start Simple:** Begin with basic implementations
2. **Iterate Fast:** Quick prototypes over perfect code
3. **Document Well:** Explain your AI decisions
4. **Show Examples:** Screenshots, videos, demos
5. **Be Honest:** Acknowledge limitations
6. **Stay Updated:** AI field moves fast

---

**Remember:** These categories are about showcasing innovation and creativity in your portfolio. Choose the category that best represents your project's primary innovation!

---

**Version:** 1.0.0  
**Last Updated:** 2026  
**Author:** Portfolio Admin System
