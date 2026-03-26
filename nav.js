// Mobile menu toggle
function toggleMenu() {
  var nav = document.getElementById('main-nav');
  if (nav) nav.classList.toggle('open');
}

// Close mobile menu when a nav link is clicked
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });
});
