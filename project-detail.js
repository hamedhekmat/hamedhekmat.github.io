// project-detail.js
function loadProjectDetail() {
  // Get project slug from URL
  const pathParts = window.location.pathname.split('/');
  const slug = pathParts[pathParts.length - 1].replace('.html', '');
  
  const project = getProjectBySlug(slug);
  
  if (!project) {
    document.getElementById('projectDetail').innerHTML = `
      <div class="not-found">
        <h2>Project not found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <a href="../index.html" class="back-btn">Back to Home</a>
      </div>
    `;
    return;
  }
  
  // Update page title
  document.title = `${project.title} | Hamed Hekmat`;
  
  // Generate project detail HTML
  const linkButtons = (project.links || []).map(link => {
    let className = 'project-link';
    if (link.type === 'github') className += ' github-link';
    else if (link.type === 'live') className += ' live-link';
    else if (link.type === 'report') className += ' report-link';
    else if (link.type === 'presentation') className += ' presentation-link';
    // Add more types as needed

    return `<a href="${link.url}" target="_blank" class="${className}">${link.label}</a>`;
  }).join('');

  const imageHtml = project.image && project.image.trim()
    ? `<img src="../${project.image}" alt="${project.title}" />`
    : '';

  document.getElementById('projectDetail').innerHTML = `
    <div class="project-header">
      <div class="project-image-large">
        ${imageHtml}
      </div>
      
      <div class="project-info-large">
        <h1>${project.title}</h1>
        <p class="project-category">${project.category}</p>
        <p class="project-description">${project.longDescription}</p>
        
        <div class="project-links">
          ${linkButtons}
        </div>
      </div>
    </div>
    
    <div class="project-details">
      <div class="technologies-section">
        <h3>Technologies Used</h3>
        <div class="technologies">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
      
      <div class="features-section">
        <h3>Key Features</h3>
        <ul class="features-list">
          ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

// Load project details when page loads
document.addEventListener('DOMContentLoaded', loadProjectDetail); 