document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Abrir/fechar menu (usando a classe `.active` que existe no CSS)
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // fecha menu no mobile
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validação do formulário de feedback
const feedbackForm = document.getElementById('feedbackForm');
const formStatus = document.getElementById('formStatus');

feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        formStatus.textContent = 'Preencha todos os campos.';
        formStatus.style.color = '#DC143C';
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
        formStatus.textContent = 'Email inválido.';
        formStatus.style.color = '#DC143C';
        return;
    }

    formStatus.textContent = 'Mensagem enviada com sucesso!';
    formStatus.style.color = '#0047AB';
    feedbackForm.reset();
});
});