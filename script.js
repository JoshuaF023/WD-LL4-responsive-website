// script.js - Handles the mobile menu toggle for beginners

// Wait for the page to load
window.onload = function() {
  // Get the menu toggle button and the navigation menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  // When the menu button is clicked, show or hide the menu
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show'); // Toggle the 'show' class
  });
};
