// === BURGER MENU ===
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

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