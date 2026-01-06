/* const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
const openMenu = document.getElementById("open-menu");

closeMenu.addEventListener("click", () => {
  menu.classList.remove("max-md:w-full");
  menu.classList.add("max-md:w-0");
});

openMenu.addEventListener("click", () => {
  menu.classList.remove("max-md:w-0");
  menu.classList.add("max-md:w-full");
});
 */

const scrollToTopBtn = document.getElementById('scrollToTop');

// Fonction pour gérer l'affichage du bouton
function toggleScrollToTop() {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'scale-0');
        scrollToTopBtn.classList.add('opacity-100', 'scale-100');
    } else {
        scrollToTopBtn.classList.remove('opacity-100', 'scale-100');
        scrollToTopBtn.classList.add('opacity-0', 'scale-0');
    }
}

// Fonction pour scroll vers le haut
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Événements
window.addEventListener('scroll', toggleScrollToTop);
scrollToTopBtn.addEventListener('click', scrollToTop);

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', toggleScrollToTop);


// code de la navbarre

const navbar = document.getElementById('navbar');

function toggleNavbarShadow() {
    if (window.scrollY >= 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', toggleNavbarShadow);
document.addEventListener('DOMContentLoaded', toggleNavbarShadow);

// ScrollReveal Animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal('#navbar > a, #menu', { interval: 100 })
sr.reveal('#navbar > button', { delay: 200 })
sr.reveal('#home h1', { origin: 'bottom' })
sr.reveal('#home p', { origin: 'bottom', delay: 500 })
sr.reveal('#home .flex button', { origin: 'bottom', delay: 600, interval: 100 })

sr.reveal('#about img', { origin: 'left' })
sr.reveal('#about .text-sky-800', { origin: 'right' })

sr.reveal('#services h1, #services p', { origin: 'top' })
sr.reveal('#services .grid > div', { origin: 'bottom', interval: 200 })

sr.reveal('#works h1', { origin: 'top' })
sr.reveal('#works p', { origin: 'bottom', delay: 500 })
sr.reveal('.work-item', { origin: 'bottom', interval: 200, delay: 300 })

sr.reveal('#contact', { origin: 'bottom' })
sr.reveal('footer', { origin: 'bottom', delay: 100 })
