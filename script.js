// script.js

// Get unique categories from projects array
function getCategories() {
  const categories = projects.map(p => p.category);
  return ['All', ...Array.from(new Set(categories))];
}

function createFilterButton(category, activeCategory) {
  return `
    <button class="filter-btn${category === activeCategory ? ' active' : ''}" data-category="${category}">
      ${category}
    </button>
  `;
}

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

function renderFilters(activeCategory) {
  const filterBar = document.getElementById('filterBar');
  const categories = getCategories();
  filterBar.innerHTML = categories.map(cat => createFilterButton(cat, activeCategory)).join('');
}

function renderProjects(activeCategory) {
  const projectList = document.getElementById('projectList');
  let filtered = projects;
  if (activeCategory && activeCategory !== 'All') {
    filtered = projects.filter(p => p.category === activeCategory);
  }
  projectList.innerHTML = filtered.map(createProjectCard).join('');
}

function setupFilters() {
  let activeCategory = 'All';
  renderFilters(activeCategory);
  renderProjects(activeCategory);

  document.getElementById('filterBar').addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-btn')) {
      activeCategory = e.target.getAttribute('data-category');
      renderFilters(activeCategory);
      renderProjects(activeCategory);
    }
  });
}

document.addEventListener('DOMContentLoaded', setupFilters);
