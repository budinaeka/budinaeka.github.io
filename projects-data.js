// Projects Data Manager
// This file handles loading and displaying projects from localStorage

const ProjectsManager = {
  // Default projects data
  defaultProjects: [
    {
      id: 1,
      title: "Spatial Risk Assessment of Foot and Mouth Disease",
      description: "GIS and multicriteria decision analysis approach for disease risk mapping in Sukabumi regency, Indonesia",
      category: "research",
      size: "large",
      image: "img/products/1.jpg",
      link: "https://doi.org/10.1016/j.rvsc.2025.105694"
    },
    {
      id: 2,
      title: "Peta Risiko Penyakit Rabies",
      description: "Kabupaten Sukabumi",
      category: "mapping",
      size: "medium",
      image: "img/products/2.jpg",
      link: ""
    },
    {
      id: 3,
      title: "Lokasi Peternak Wilayah 1",
      description: "",
      category: "webgis",
      size: "small",
      image: "img/products/3.jpg",
      link: "https://budinaeka.github.io/petapeternak"
    },
    {
      id: 4,
      title: "Rawan Bencana Merapi",
      description: "",
      category: "disaster",
      size: "small",
      image: "img/products/4.jpg",
      link: "https://budinamerapi.vercel.app"
    },
    {
      id: 5,
      title: "Random Forest Risk Mapping",
      description: "Foot-and-Mouth Disease in Sukabumi Regency",
      category: "ml",
      size: "medium",
      image: "img/products/5.jpg",
      link: ""
    }
  ],

  // Category configuration
  categoryConfig: {
    research: { label: 'Published Research', icon: 'seal-check', color: 'emerald' },
    mapping: { label: 'Risk Mapping', icon: 'map-pin', color: 'blue' },
    webgis: { label: 'WebGIS', icon: 'globe', color: 'cyan' },
    disaster: { label: 'Disaster Map', icon: 'warning', color: 'orange' },
    ml: { label: 'Machine Learning', icon: 'tree-structure', color: 'purple' },
    genai: { label: 'Generative AI', icon: 'sparkle', color: 'violet' },
    vibecoding: { label: 'Vibecoding', icon: 'code', color: 'fuchsia' },
    aiagents: { label: 'AI Agents', icon: 'robot', color: 'indigo' },
    other: { label: 'Other', icon: 'folder', color: 'slate' }
  },

  // Get projects from localStorage or use defaults
  getProjects() {
    const saved = localStorage.getItem('portfolioProjects');
    if (saved) {
      return JSON.parse(saved);
    }
    // Initialize with default projects
    localStorage.setItem('portfolioProjects', JSON.stringify(this.defaultProjects));
    return this.defaultProjects;
  },

  // Render projects to the page
  renderProjects(containerId = 'projectsContainer') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const projects = this.getProjects();
    container.innerHTML = '';

    projects.forEach((project, index) => {
      const config = this.categoryConfig[project.category] || this.categoryConfig.other;
      const sizeClass = this.getSizeClass(project.size);
      const delayClass = `delay-${Math.min(index, 4)}00`;

      const projectCard = document.createElement('div');
      projectCard.className = `bento-item ${sizeClass} group fade-in-up ${delayClass}`;
      
      const hasLink = project.link && project.link.trim() !== '';
      const aspectRatio = project.size === 'large' ? 'aspect-[16/9]' : 
                         project.size === 'medium' ? 'aspect-[4/3]' : 'aspect-square';

      projectCard.innerHTML = `
        <div class="relative h-full overflow-hidden rounded-[2rem] bg-white border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
          <div class="${aspectRatio} overflow-hidden">
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div class="p-${project.size === 'large' ? '6 lg:p-7' : '5'}">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${config.color}-50 text-${config.color}-700 text-xs font-medium mb-3">
              <i class="ph-fill ph-${config.icon}"></i>
              ${config.label}
            </div>
            <h3 class="text-${project.size === 'large' ? 'xl lg:text-2xl' : project.size === 'medium' ? 'lg' : 'base'} font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
              ${project.title}
            </h3>
            ${project.description ? `
              <p class="text-sm text-slate-600 ${project.size === 'large' ? 'mb-4' : 'mb-2'} leading-relaxed">
                ${project.description}
              </p>
            ` : ''}
            ${hasLink ? `
              <a href="${project.link}" target="_blank" class="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
                ${project.category === 'research' ? 'Read Publication' : 'View Map'}
                <i class="ph ph-arrow-right ${project.size === 'small' ? 'text-xs' : ''}"></i>
              </a>
            ` : ''}
          </div>
        </div>
      `;

      container.appendChild(projectCard);
    });
  },

  // Get CSS class for project size
  getSizeClass(size) {
    switch(size) {
      case 'large': return 'bento-large';
      case 'medium': return 'bento-medium';
      default: return '';
    }
  }
};

// Auto-render when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    ProjectsManager.renderProjects();
  });
} else {
  ProjectsManager.renderProjects();
}
