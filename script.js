// script.js

function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.content section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostra a seção clicada
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
}

// Exibe a seção inicial (home) por padrão
showSection('home');
