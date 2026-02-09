/* ============================================
   YachayRA — Main JavaScript
   Mobile menu, scroll effects, active nav
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Menu Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  function openMenu() {
    navLinks.classList.add('open');
    navToggle.classList.add('open');
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (navLinks.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMenu);
  }

  // Close menu when a nav link is clicked (mobile)
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // --- Navbar Scroll Shadow ---
  const navbar = document.querySelector('.navbar');

  function handleScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  if (navbar) {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on load in case page is already scrolled
  }

});
