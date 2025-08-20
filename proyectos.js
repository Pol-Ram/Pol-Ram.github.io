// proyectos.js

// Función para mostrar secciones
function showSection(section) {
  document.querySelectorAll(".subnav button").forEach((btn) => btn.classList.remove("active"));
  document.querySelectorAll(".project-section").forEach((sec) => (sec.style.display = "none"));
  document.querySelector(`.subnav button[onclick*='${section}']`).classList.add("active");
  document.getElementById(section).style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  const icon = document.getElementById("menu-icon");
  const navLinks = nav.querySelectorAll("a");

  toggleBtn.addEventListener("click", function () {
    nav.classList.toggle("show");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("show")) {
        nav.classList.remove("show");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
      }
    });
  });

  // ✅ Solo una inicialización de GLightbox
 
});



document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".project img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".close-btn");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});

