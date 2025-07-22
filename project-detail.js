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

  // Set page title
  document.title = `${project.title} | Hamed Hekmat`;

  // Prepare optional image
  const imageHtml = project.image && project.image.trim()
    ? `<img src="../${project.image}" alt="${project.title}" class="project-detail-image" />`
    : '';

  // Prepare technologies/features list
  const techList = (project.technologies && project.technologies.length)
    ? `<ul class="project-tech-list">${project.technologies.map(tech => `<li>${tech}</li>`).join('')}</ul>`
    : '';
  const featuresList = (project.features && project.features.length)
    ? `<ul class="project-features-list">${project.features.map(feature => `<li>${feature}</li>`).join('')}</ul>`
    : '';

  // Prepare additional links
  const linkButtons = (project.links || []).map(link => {
    let className = 'project-link';
    if (link.type === 'github') className += ' github-link';
    else if (link.type === 'live') className += ' live-link';
    else if (link.type === 'report') className += ' report-link';
    else if (link.type === 'presentation') className += ' presentation-link';
    // Add more types as needed
    return `<a href="${link.url}" target="_blank" class="${className}">${link.label}</a>`;
  }).join('');

  document.getElementById('projectDetail').innerHTML = `
    <div class="project-detail-content">
      <h1 class="project-detail-title">${project.title}</h1>
      ${imageHtml}
      <div class="project-detail-description">
        <p>${project.longDescription}</p>
      </div>
      ${techList ? `<div class="project-detail-section"><h3>Technologies Used</h3>${techList}</div>` : ''}
      ${featuresList ? `<div class="project-detail-section"><h3>Key Features</h3>${featuresList}</div>` : ''}
      ${linkButtons ? `<div class="project-detail-section project-detail-links">${linkButtons}</div>` : ''}
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', loadProjectDetail); 