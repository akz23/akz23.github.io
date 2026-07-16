// === BURGER MENU ===
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

// berger menu for main

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    
    if (burger && nav) {
        burger.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            nav.classList.toggle('open');
        });
        
        // Закрытие при клике вне меню
        document.addEventListener('click', function(e) {
            const mainbar = document.querySelector('.mainbar');
            if (mainbar && !mainbar.contains(e.target)) {
                burger.classList.remove('active');
                nav.classList.remove('open');
            }
        });
        
        // Закрытие при клике на пункт меню
        nav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                burger.classList.remove('active');
                nav.classList.remove('open');
            });
        });
    }
});





// === HERO SLIDER ===
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dots span');

if (slides.length > 0) {
    function showSlide(index) {
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        currentSlide = index;
    }
    dots.forEach(d => d.addEventListener('click', () => showSlide(Number(d.dataset.slide))));
    setInterval(() => { showSlide((currentSlide + 1) % slides.length); }, 5000);
}

// === FAQ ===
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.classList.toggle('open');
        q.querySelector('span').textContent = answer.classList.contains('open') ? '−' : '+';
    });
});
