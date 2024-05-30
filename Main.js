// script.js
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const primaryNav = document.querySelector('.primary-navigation');
  const primaryHeader = document.querySelector('.primary-header');

  navToggle.addEventListener('click', () => {
    const isVisible = primaryNav.getAttribute('data-visible') === "true";

    primaryNav.setAttribute('data-visible', !isVisible);
    navToggle.setAttribute('aria-expanded', !isVisible);
    primaryHeader.setAttribute('data-overlay', !isVisible);

    if (!isVisible) {
      navToggle.querySelector('.icon-open').style.display = 'none';
      navToggle.querySelector('.icon-close').style.display = 'block';
    } else {
      navToggle.querySelector('.icon-open').style.display = 'block';
      navToggle.querySelector('.icon-close').style.display = 'none';
    }
  });
});

