const menuToggle = document.querySelector('.menu-toggle');
    const cabecalho = document.querySelector('.cabecalho');

    menuToggle.addEventListener('click', () => {
        cabecalho.classList.toggle('active'); // Alterna a classe 'active' para mostrar ou ocultar o menu
    });