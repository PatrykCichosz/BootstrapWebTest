document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => card.classList.add('hovered'));
        card.addEventListener('mouseout', () => card.classList.remove('hovered'));
    });

    const navbar = document.querySelector('.navbar');
    const navbarOffset = navbar.offsetTop;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('sticky', window.scrollY >= navbarOffset);
    });

    const backToSectionBtns = document.querySelectorAll('.back-to-section-btn');
    backToSectionBtns.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = document.querySelector(button.getAttribute('data-target'));
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    const sections = document.querySelectorAll('section');
    const observerOptions = { root: null, threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('fade-in', entry.isIntersecting);
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});

document.querySelectorAll('.btn-link').forEach(btn => {
    btn.addEventListener('click', function () {
        const target = document.querySelector(this.getAttribute('data-bs-target'));
        target.classList.toggle('show');
    });
});
