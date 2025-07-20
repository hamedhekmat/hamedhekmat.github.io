// header.js
async function loadHeader() {
  try {
    // Determine the correct path to header.html based on current page
    const currentPath = window.location.pathname;
    const headerPath = currentPath.includes('/projects/') ? '../header.html' : 'header.html';
    
    const response = await fetch(headerPath);
    const headerHtml = await response.text();
    
    // Insert header at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', headerHtml);
    
    // Update navigation links based on current page
    updateNavigation();
  } catch (error) {
    console.error('Error loading header:', error);
  }
}

function updateNavigation() {
  const currentPath = window.location.pathname;
  const homeLink = document.getElementById('home-link');
  
  if (homeLink) {
    // If we're on a project detail page (in projects/ folder)
    if (currentPath.includes('/projects/')) {
      homeLink.href = '../index.html';
      homeLink.textContent = '← Back to Home';
    } else {
      homeLink.href = 'index.html';
      homeLink.textContent = 'Home';
    }
  }
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader); 