window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = 1;
      }, index * 300); // Stagger animations
    });
  });
  const toggleButton = document.getElementById("darkModeToggle");

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  
    // Optional: Save preference to local storage
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);
  });
  
  // Load saved preference on page load
  window.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      document.body.classList.add("dark-mode");
    }
  
    // Fade-in animation for sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = 1;
      }, index * 300);
    });
  });
    