// script.js

// Get unique categories from projects array
function getCategories() {
  const allCategories = projects.flatMap(p => p.categories); // Use flatMap for arrays
  return ['All', ...Array.from(new Set(allCategories))];
}

function createFilterButton(category, activeCategory) {
  return `
    <button class="filter-btn${category === activeCategory ? ' active' : ''}" data-category="${category}">
      ${category}
    </button>
  `;
}

function createProjectCard(project) {
  const categoryDisplay = project.categories 
    ? project.categories.join(' • ') 
    : project.category;
    
  return `
    <div class="project-card">
      <img src="${project.image}" alt="${project.title}"/>
      <h3>${project.title}</h3>
      <p class="project-category">${categoryDisplay}</p>
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
    filtered = projects.filter(p => p.categories.includes(activeCategory)); // Check if category is in array
  }
  projectList.innerHTML = filtered.map(createProjectCard).join('');
}

function setupFilters() {
  console.log('setupFilters running')
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
