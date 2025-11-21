document.addEventListener("DOMContentLoaded", () => {
    /* BOTÃO "DENUNCIAR" */
    const btnDenunciar = document.querySelector(".btn-danger");

    if (btnDenunciar) {
        btnDenunciar.addEventListener("click", () => {
            const secaoDenuncia = document.getElementById("denuncia");
            if (secaoDenuncia) {
                secaoDenuncia.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    /* BOTÃO "SABER MEUS DIREITOS" */
    const secDireitos = document.getElementById('direitos');

    if (btnDireitos) {
        btnDireitos.addEventListener('click', (e) => {
            e.preventDefault();

            if (!secDireitos) {
                console.error('Seção "Direitos Trabalhistas" (id="direitos") não encontrada.');
                return;
            }

            secDireitos.scrollIntoView({ behavior: 'smooth', block: 'start' });

            secDireitos.classList.add('flash-denuncia');
            setTimeout(() => secDireitos.classList.remove('flash-denuncia'), 1600);
        });
    }


    /* FORMULÁRIO DE DENÚNCIA */
    const reportForm = document.querySelector(".report-form");

    if (reportForm) {
        reportForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const local = reportForm.querySelector("input[placeholder='Local do ocorrido']").value.trim();
            const tipo = reportForm.querySelector("input[placeholder='Tipo de violação']").value.trim();
            const descricao = reportForm.querySelector("textarea").value.trim();

            if (!local || !tipo) {
                alert("Preencha todos os campos obrigatórios.");
                return;
            }

            alert("Sua denúncia foi enviada com sucesso! (mock)");
            reportForm.reset();
        });
    }

    /* SCROLL SUAVE PARA ÂNCORAS */
    const linksInternos = document.querySelectorAll('a[href^="#"]');

    linksInternos.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const alvo = document.querySelector(link.getAttribute("href"));
            if (alvo) {
                alvo.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});