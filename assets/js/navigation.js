document.addEventListener('DOMContentLoaded', function() {
  const hasSubmenuItems = document.querySelectorAll('.has-submenu');
  
  function initializeMobileNavigation() {
    hasSubmenuItems.forEach(item => {
      const link = item.querySelector('.page-link');
      const submenu = item.querySelector('.submenu');
      
      // Remove existing event listeners
      const newLink = link.cloneNode(true);
      link.parentNode.replaceChild(newLink, link);
      
      // Add click functionality only on mobile
      if (window.innerWidth <= 600) {
        newLink.addEventListener('click', function(e) {
          e.preventDefault();
          item.classList.toggle('mobile-active');
          
          // Close other submenus
          hasSubmenuItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('mobile-active');
            }
          });
        });
      }
    });
  }

  // Initialize on page load
  initializeMobileNavigation();

  // Re-initialize on window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // Remove mobile-active class when switching to desktop
      if (window.innerWidth > 600) {
        hasSubmenuItems.forEach(item => {
          item.classList.remove('mobile-active');
        });
      }
      initializeMobileNavigation();
    }, 250);
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 600) {
      const nav = document.querySelector('.site-nav');
      const navTrigger = document.getElementById('nav-trigger');
      
      if (!nav.contains(e.target)) {
        navTrigger.checked = false;
        hasSubmenuItems.forEach(item => {
          item.classList.remove('mobile-active');
        });
      }
    }
  });
});