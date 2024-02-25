// Initialize ScrollReveal
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
});

// Add scroll animations
sr.reveal('.home-text', { delay: 200, origin: 'top' });
sr.reveal('.home-img', { delay: 300, origin: 'top' });
// Add more animations as needed

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu functionality
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  function toggleMenu() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
  }

  menuIcon.addEventListener('click', toggleMenu);

  // Close mobile menu when a menu item is clicked
  const menuItems = document.querySelectorAll('.navbar a');
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });
});

