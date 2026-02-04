// Simple show more/less functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  
  toggleButtons.forEach(button => {
    // Find all items that should be collapsible (those initially hidden)
    const section = button.closest('.section');
    const allItems = Array.from(section.querySelectorAll('.item'));
    
    // Find items that are initially hidden and mark them
    const collapsibleItems = allItems.filter(item => item.classList.contains('hidden'));
    collapsibleItems.forEach(item => {
      item.setAttribute('data-collapsible', 'true');
    });
    
    button.addEventListener('click', function() {
      const isExpanded = this.textContent === 'Show Less';
      
      if (isExpanded) {
        // Hide items (find by data attribute since class was removed)
        const itemsToHide = Array.from(section.querySelectorAll('.item[data-collapsible="true"]'));
        itemsToHide.forEach(item => {
          item.classList.add('hidden');
        });
        this.textContent = 'Show More';
      } else {
        // Show items (find by data attribute)
        const itemsToShow = Array.from(section.querySelectorAll('.item[data-collapsible="true"]'));
        itemsToShow.forEach(item => {
          item.classList.remove('hidden');
        });
        this.textContent = 'Show Less';
      }
    });
  });
});
