document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Abrir/fechar menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll + fecha menu no mobile
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.classList.remove('active'); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ====================
// Cadastro de Vítimas
// ====================
const form = document.getElementById('cadastroVitimaForm');
const statusMsg = document.getElementById('formStatus');
const containerLista = document.getElementById('containerLista');
let vitimas = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const idade = document.getElementById('idade').value.trim();
    const localizacao = document.getElementById('localizacao').value.trim();
    const descricao = document.getElementById('descricao').value.trim();

    if (!nome || !idade || !localizacao || !descricao) {
        statusMsg.textContent = 'Preencha todos os campos.';
        statusMsg.style.color = '#dc2626';
        return;
    }

    vitimas.push({ nome, idade, localizacao, descricao });
    statusMsg.textContent = 'Vítima cadastrada com sucesso!';
    statusMsg.style.color = '#2563eb';
    form.reset();
    atualizarLista();
});

function atualizarLista() {
    containerLista.innerHTML = '';
    if (vitimas.length === 0) {
        containerLista.innerHTML = `
            <div class="lista-vazia">
                <p>Nenhuma vítima cadastrada.</p>
            </div>
        `;
        return;
    }
    vitimas.forEach((v, index) => {
        const card = document.createElement('div');
        card.classList.add('vitima-card');
        card.innerHTML = `
            <h3>${v.nome} (${v.idade} anos)</h3>
            <p><strong>Localização:</strong> ${v.localizacao}</p>
            <p>${v.descricao}</p>
            <button class="btn-excluir">Excluir</button>
        `;
        card.querySelector('.btn-excluir').addEventListener('click', () => {
            vitimas.splice(index, 1);
            atualizarLista();
        });
        containerLista.appendChild(card);
    });
}
});