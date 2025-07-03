// Removed all code related to dark mode toggle icon

document.addEventListener('DOMContentLoaded', function() {
  // Load saved mode preference
  if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark');
  }
  const icon = document.querySelector('.sun-corner');
  if (icon) {
    function updateIcon() {
      if (document.body.classList.contains('dark')) {
        icon.className = 'fa-solid fa-sun fa-fw sun-corner';
        icon.style.color = getComputedStyle(document.body).getPropertyValue('--color-dew');
        icon.setAttribute('aria-label', 'Switch to light mode');
      } else {
        icon.className = 'fa-solid fa-moon fa-fw sun-corner';
        icon.style.color = getComputedStyle(document.body).getPropertyValue('--color-evergreen');
        icon.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
    updateIcon();
    icon.addEventListener('click', function() {
      document.body.classList.toggle('dark');
      updateIcon();
    });
  }

  const selectorBtns = document.querySelectorAll('.vertical-selector .selector-btn');
  const contentBlurbs = document.querySelectorAll('.content-blurb');

  selectorBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      selectorBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const tabName = this.getAttribute('data-tab');
      contentBlurbs.forEach(blurb => {
        if (blurb.getAttribute('data-tab') === tabName) {
          blurb.classList.add('active');
        } else {
          blurb.classList.remove('active');
        }
      });
    });
  });

  // Mobile tab switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  const blurbs = document.querySelectorAll('.content-blurb');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      tabBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const tab = this.getAttribute('data-tab');
      blurbs.forEach(blurb => {
        if (blurb.getAttribute('data-tab') === tab) {
          blurb.classList.add('active');
        } else {
          blurb.classList.remove('active');
        }
      });
    });
  });
}); 