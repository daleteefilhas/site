// Aguarda o documento carregar completamente antes de executar
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. ROLAGEM SUAVE DO MENU
    // ==========================================
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

    // ==========================================
    // 2. ENVIO DO FORMULÁRIO PARA O WHATSAPP
    // ==========================================
    const formWhatsapp = document.getElementById('form-whatsapp');
    
    if (formWhatsapp) {
        formWhatsapp.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que a página recarregue ao clicar
            
            // Captura o que o usuário digitou
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Monta a mensagem final (o %0A serve para pular linha no WhatsApp)
            const texto = `Olá! Meu nome é *${nome}* (E-mail: ${email}).%0A%0A${mensagem}`;
            const numeroWhatsApp = '5515991468764';
            
            // Abre o WhatsApp com a mensagem pronta em uma nova aba
            window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, '_blank');
        });
    }

});
