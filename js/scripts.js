// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Slider functionality
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

next.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Testimonial slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
}, 7000);

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    playClickSound();
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    this.reset();
});

// Theme toggle
const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', () => {
    playClickSound();
    document.body.classList.toggle('dark-mode');
    themeButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeButton.textContent = '☀️';
}

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: true
});

// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffd700' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 2, direction: 'none', random: true }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    }
});

// Initialize Tilt.js
VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.5
});

// Loader animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.add('loaded');
    }, 1000); // 1 saniye sonra loader kaybolur
});

// Click sound effect
const clickSound = document.getElementById('click-sound');
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

// Add click sound to CTA buttons and live support
document.querySelectorAll('.cta-button, .support-button').forEach(button => {
    button.addEventListener('click', playClickSound);
});