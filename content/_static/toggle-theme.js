(function() {
  function applyTheme(theme) {
    const linkMoon = document.querySelector('link[href="_static/rose-pine-moon.css"]');
    const linkDawn = document.querySelector('link[href="_static/rose-pine-dawn.css"]');
    if (theme === 'dark') {
      linkMoon.disabled = false;
      linkDawn.disabled = true;
    } else {
      linkMoon.disabled = true;
      linkDawn.disabled = false;
    }
  }

  // Apply theme based on user preference
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  applyTheme(darkModeMediaQuery.matches ? 'dark' : 'light');
  darkModeMediaQuery.addEventListener('change', (e) => {
    applyTheme(e.matches ? 'dark' : 'light');
  });
})();
