document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".cabecalho");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active"); // Alterna a classe 'active' no menu
    });
});
