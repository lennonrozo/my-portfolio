window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = 1;
      }, index * 300); 
    });
  });
  const toggleButton = document.getElementById("darkModeToggle");

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);
  });
  
  window.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      document.body.classList.add("dark-mode");
    }
  
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = 1;
      }, index * 300);
    });
  });
    
