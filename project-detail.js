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
  document.getElementById('projectDetail').innerHTML = `
    <div class="project-header">
      <div class="project-image-large">
        <img src="../${project.image}" alt="${project.title}" />
      </div>
      
      <div class="project-info-large">
        <h1>${project.title}</h1>
        <p class="project-category">${project.category}</p>
        <p class="project-description">${project.longDescription}</p>
        
        <div class="project-links">
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-link">View on GitHub</a>` : ''}
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link">Live Demo</a>` : ''}
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