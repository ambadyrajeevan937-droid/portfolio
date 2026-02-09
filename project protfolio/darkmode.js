function toogleTheme  () {
  const isDarkMode = localStorage.getItem("darkmode");
  if (isDarkMode === "true") {
      
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
  } else {
    
    localStorage.setItem("darkmode", "true");
    document.body.classList.add("darkmode");
  }
};


window.onload = function () {
  const isDarkMode = localStorage.getItem("darkmode");
  if (isDarkMode === "true") {
    document.body.classList.add("darkmode");
}
};



  document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navBar = document.getElementById("nav-links");

    menuIcon.addEventListener("click", () => {
      navBar.classList.toggle("active");

      // Change the icon when toggled
      if (menuIcon.textContent === "☰") {
        menuIcon.textContent = "✖"; // Close icon
      } else {
        menuIcon.textContent = "☰"; // Hamburger icon
      }
    });

    // Optional: close menu when clicking a link (mobile UX)
    document.querySelectorAll(".bar a").forEach(link => {
      link.addEventListener("click", () => {
        navBar.classList.remove("active");
        menuIcon.textContent = "☰";
      });
    });
  });