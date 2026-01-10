// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.card-check, .feature-card, .instructor-content').forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 0';
        navbar.style.background = 'rgba(18, 18, 18, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.padding = '1.5rem 0';
        navbar.style.background = 'rgba(18, 18, 18, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
