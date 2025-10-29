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
    if (window.scrollY >= 150) {
        // Ajoute le shadow quand on scroll
        navbar.classList.add('shadow-lg', 'bg-sky-50');
        navbar.classList.remove('shadow-none');
    } else {
        // Retire le shadow quand on est en haut
        navbar.classList.remove('shadow-lg', 'bg-sky-50');
        navbar.classList.add('shadow-none');
    }
}

// Événements
window.addEventListener('scroll', toggleNavbarShadow);
document.addEventListener('DOMContentLoaded', toggleNavbarShadow);