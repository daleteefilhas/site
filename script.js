// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os links do menu que começam com '#'
    const linksInternos = document.querySelectorAll('.nav-links a[href^="#"]');

    linksInternos.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita o pulo imediato padrão do HTML
            
            // Pega o ID da seção que queremos ir (ex: #sobre)
            const id = this.getAttribute('href');
            const targetSection = document.querySelector(id);
            
            // Faz a rolagem suave até a seção, compensando a altura do menu fixo
            const menuHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - menuHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Efeito deslizante
            });
        });
    });
});
