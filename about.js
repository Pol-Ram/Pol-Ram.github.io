document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const icon = document.getElementById("menu-icon");
    const navLinks = nav.querySelectorAll("a");

    // Menú hamburguesa
    toggleBtn.addEventListener("click", function () {
        nav.classList.toggle("show");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("show")) {
                nav.classList.remove("show");
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-times");
            }
        });
    });

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, observerOptions);

    // Elementos a observar con animación
    const animatedElements = [
        ...document.querySelectorAll('.hidden'),
        ...document.querySelectorAll('.section-title')
    ];
    
    animatedElements.forEach(el => {
        if (!el.classList.contains('show')) {
            observer.observe(el);
        }
    });

    // Asegurar que el contenido no quede detrás del header fijo
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('main').style.paddingTop = `${headerHeight + 20}px`;

    // Animación inicial sincronizada para About Me
    setTimeout(() => {
        document.querySelector('.about-img-container').classList.add('show');
        document.querySelector('.about-content .section-title').classList.add('show');
    }, 300);
});



document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    
    // Cambiar ícono (opcional)
    const icon = document.getElementById('menu-icon');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
  
  // Cerrar menú al hacer clic en un enlace (para móviles)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
        const icon = document.getElementById('menu-icon');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
});


// about.js
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

hiddenElements.forEach(el => observer.observe(el));
