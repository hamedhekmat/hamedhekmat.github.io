// script.js

// Get unique categories from projects array
function getCategories() {
  // Safely flatten all categories arrays, ignoring missing or non-array values
  const allCategories = projects.flatMap(p => Array.isArray(p.categories) ? p.categories : []);
  // Remove duplicates and return
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

  // Generate link buttons
  const linkButtons = (project.links || []).map(link => {
    let className = '';
    if (link.type === 'github') className = 'github-link';
    else if (link.type === 'live') className = 'live-link';
    else if (link.type === 'report') className = 'report-link';
    // Add more types as needed

    return `<a href="${link.url}" target="_blank" class="${className}">${link.label}</a>`;
  }).join('');

  return `
    <div class="project-card">
      <h3>${project.title}</h3>
      <p class="project-category">${categoryDisplay}</p>
      <p>${project.shortDescription}</p>
      <div class="project-links">
        <a href="projects/${project.slug}.html" class="view-project">View Details</a>
        ${linkButtons}
      </div>
    </div>
  `;
}

function renderFilters(activeCategory) {
  console.log(getCategories())
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
