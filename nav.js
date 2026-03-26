// Sticky nav shadow on scroll
window.addEventListener('scroll', function () {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.getElementById('navLinks').classList.remove('open');
  });
});
