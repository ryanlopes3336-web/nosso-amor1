/*==========================================
  RYAN ❤️ ANA PAULA
==========================================*/

const DATA_INICIO = new Date(2026, 3, 12, 0, 0, 0);

/*==========================================
  TELA INICIAL
==========================================*/

const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");
const startButton = document.getElementById("startButton");

main.style.display = "none";

startButton.addEventListener("click", () => {

    intro.style.opacity = "0";

    intro.style.transition = "1s";

    setTimeout(() => {

        intro.style.display = "none";

        main.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },1000);

});

/*==========================================
  CONTADOR
==========================================*/

function atualizarContador(){

    const agora = new Date();

    let anos = agora.getFullYear() - DATA_INICIO.getFullYear();

    let meses = agora.getMonth() - DATA_INICIO.getMonth();

    let dias = agora.getDate() - DATA_INICIO.getDate();

    if(dias < 0){

        meses--;

        const ultimoMes = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        );

        dias += ultimoMes.getDate();

    }

    if(meses < 0){

        anos--;

        meses += 12;

    }

    const diferenca = agora - DATA_INICIO;

    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24;

    const minutos = Math.floor(diferenca / 1000 / 60) % 60;

    const segundos = Math.floor(diferenca / 1000) % 60;

    document.getElementById("years").textContent = anos;

    document.getElementById("months").textContent = meses;

    document.getElementById("days").textContent = dias;

    document.getElementById("hours").textContent = horas;

    document.getElementById("minutes").textContent = minutos;

    document.getElementById("seconds").textContent = segundos;

}

atualizarContador();

setInterval(atualizarContador,1000);
/*==========================================
  CARTA COM EFEITO DE MÁQUINA DE ESCREVER
==========================================*/

const mensagem = `Em cada segundo ao seu lado encontrei a vontade de ficar e te amar mais e mais dia após dia.

Construir o mundo seria pouco pra te mostrar o que eu faria só pra te ter por perto!

De detalhes em detalhes eu fui me vendo no seu olhar e sentindo seu amor.

O calor do nosso abraço, o encaixe dos beijos, o tocar da nossa pele...

Fica impossível descrever um sentimento tão lindo e amplo igual ao que eu sinto por você.

Eu te amo, Ana Paula. ❤️`;

const typingText = document.getElementById("typingText");

let indice = 0;

function escreverCarta() {

    if (!typingText) return;

    if (indice < mensagem.length) {

        typingText.textContent += mensagem.charAt(indice);

        indice++;

        setTimeout(escreverCarta, 35);

    }

}

setTimeout(escreverCarta, 1500);

/*==========================================
  CARROSSEL
==========================================*/

const slides = document.querySelectorAll(".slide");

let slideAtual = 0;

function trocarSlide() {

    if (slides.length === 0) return;

    slides[slideAtual].classList.remove("active");

    slideAtual++;

    if (slideAtual >= slides.length) {

        slideAtual = 0;

    }

    slides[slideAtual].classList.add("active");

}

setInterval(trocarSlide, 4000);

/*==========================================
  MODAL DAS FOTOS
==========================================*/

const modal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const fecharModal = document.querySelector(".closeModal");

slides.forEach((foto) => {

    foto.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImage.src = foto.src;

    });

});

fecharModal.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});
/*==========================================
  CHUVA DE CORAÇÕES
==========================================*/

const heartRain = document.getElementById("heartRain");

function criarCoracao() {

    const coracao = document.createElement("div");

    coracao.innerHTML = "❤️";

    coracao.style.position = "fixed";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.top = "-40px";
    coracao.style.fontSize = (18 + Math.random() * 25) + "px";
    coracao.style.opacity = Math.random();
    coracao.style.pointerEvents = "none";
    coracao.style.zIndex = "999";

    const tempo = 5 + Math.random() * 5;

    coracao.animate([
        {
            transform: "translateY(0px) rotate(0deg)"
        },
        {
            transform: `translateY(${window.innerHeight + 80}px) rotate(${360 + Math.random() * 360}deg)`
        }
    ], {
        duration: tempo * 1000,
        easing: "linear"
    });

    heartRain.appendChild(coracao);

    setTimeout(() => {

        coracao.remove();

    }, tempo * 1000);

}

setInterval(criarCoracao, 350);

/*==========================================
  PARTÍCULAS FLUTUANTES
==========================================*/

const hearts = document.getElementById("hearts");

function criarParticula() {

    const particula = document.createElement("div");

    particula.innerHTML = "✨";

    particula.style.position = "fixed";
    particula.style.left = Math.random() * 100 + "vw";
    particula.style.bottom = "-30px";
    particula.style.fontSize = (10 + Math.random() * 12) + "px";
    particula.style.opacity = .8;
    particula.style.pointerEvents = "none";

    const tempo = 6 + Math.random() * 5;

    particula.animate([
        {
            transform: "translateY(0px)",
            opacity: .8
        },
        {
            transform: `translateY(-${window.innerHeight + 100}px)`,
            opacity: 0
        }
    ], {
        duration: tempo * 1000,
        easing: "linear"
    });

    hearts.appendChild(particula);

    setTimeout(() => {

        particula.remove();

    }, tempo * 1000);

}

setInterval(criarParticula, 700);

/*==========================================
  BRILHO DO BOTÃO
==========================================*/

setInterval(() => {

    startButton.animate([

        {
            transform:"scale(1)"
        },

        {
            transform:"scale(1.08)"
        },

        {
            transform:"scale(1)"
        }

    ],{

        duration:1200

    });

},3500);

/*==========================================
  EFEITO AO ROLAR
==========================================*/

const elementos = document.querySelectorAll(
".hero,.contador,.gallery,.love-letter,.spotify-section,.timeline,.ending"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate([

                {
                    opacity:0,
                    transform:"translateY(40px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:900,
                fill:"forwards"

            });

        }

    });

});

elementos.forEach(el=>{

    observer.observe(el);

});

/*==========================================
  MENSAGEM NO CONSOLE ❤️
==========================================*/

console.log(
"Ryan ❤️ Ana Paula\n\nQue esse contador nunca pare de aumentar.\n\nFeito com muito carinho."
);
