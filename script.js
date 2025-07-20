// script.js
function createProjectCard(project) {
  return `
    <div class="project-card">
      <img src="${project.image}" alt="${project.title}"/>
      <h3>${project.title}</h3>
      <p>${project.shortDescription}</p>
      <div class="project-links">
        <a href="projects/${project.slug}.html" class="view-project">View Details</a>
        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="github-link">GitHub</a>` : ''}
        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="live-link">Live Demo</a>` : ''}
      </div>
    </div>
  `;
}

function loadProjects() {
  const projectList = document.getElementById('projectList');
  if (projectList) {
    projectList.innerHTML = projects.map(createProjectCard).join('');
  }
}

// Load projects when page loads
document.addEventListener('DOMContentLoaded', loadProjects);
