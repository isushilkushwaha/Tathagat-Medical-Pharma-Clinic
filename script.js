// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.classList.toggle('active');
});

// Simple Scroll Animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Close menu after clicking a link (mobile)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth < 768) {
            navLinks.style.display = 'none';
        }
    });
});