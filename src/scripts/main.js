//cookie
document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesButton = document.getElementById("accept-cookies");

  // Verifica se o usuário já aceitou os cookies
  if (!localStorage.getItem("cookiesAccepted")) {
      setTimeout(() => {
          cookieBanner.classList.add("show"); // Adiciona a classe para mostrar o banner
      }, 1000); // Atraso de 1 segundo antes de mostrar
  }

  // Ao clicar no botão "Aceitar Cookies"
  acceptCookiesButton.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true"); // Armazena a aceitação
      cookieBanner.classList.remove("show"); // Remove a classe para esconder o banner
  });
});

//nome que se autoescreve
const nome = "Jean Pablo Alves Gonçalves";
let h2Elemento = document.getElementById("typewriter");
let charIndex = 0;
let escrevendo = true;
h2Elemento.innerHTML = nome; 

function typeEffectH2() {
    if (escrevendo) {
        h2Elemento.innerHTML = nome.slice(0, charIndex++);

        if (charIndex > nome.length) {
            escrevendo = false;
            setTimeout(typeEffectH2, 1000); 
        } else {
            setTimeout(typeEffectH2, 100); // Velocidade de escrita
        }
    } else {
        h2Elemento.innerHTML = nome.slice(0, --charIndex);

        if (charIndex === 0) {
            escrevendo = true;
            setTimeout(typeEffectH2, 500); 
        } else {
            setTimeout(typeEffectH2, 100);
        }
    }
}

typeEffectH2();
