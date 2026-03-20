/**
 * Dark Mode Toggle Script
 * Handles switching between light and dark modes with localStorage persistence
 */

(function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const htmlElement = document.documentElement;
  const body = document.body;

  // Initialize dark mode preference
  function initDarkMode() {
    // Check localStorage first
    const savedMode = localStorage.getItem('darkMode');

    if (savedMode !== null) {
      // Use saved preference
      if (savedMode === 'true') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    } else {
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    }
  }

  // Enable dark mode
  function enableDarkMode() {
    body.classList.add('dark-mode');
    if (darkModeToggle) {
      darkModeToggle.classList.add('dark-mode-active');
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      darkModeToggle.title = 'Switch to light mode';
    }
    localStorage.setItem('darkMode', 'true');
  }

  // Disable dark mode
  function disableDarkMode() {
    body.classList.remove('dark-mode');
    if (darkModeToggle) {
      darkModeToggle.classList.remove('dark-mode-active');
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      darkModeToggle.title = 'Switch to dark mode';
    }
    localStorage.setItem('darkMode', 'false');
  }

  // Toggle dark mode
  function toggleDarkMode() {
    if (body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  }

  // Add event listener to toggle button
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }

  // Listen for system color scheme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      const savedMode = localStorage.getItem('darkMode');
      // Only auto-update if user hasn't set a preference
      if (savedMode === null) {
        if (e.matches) {
          enableDarkMode();
        } else {
          disableDarkMode();
        }
      }
    });
  }

  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkMode);
  } else {
    initDarkMode();
  }
})();
