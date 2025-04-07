import initTooltip from "./modules/tooltip.js";
import initMostrarGotop from "./modules/gotop.js";

new SimpleAnime();
initTooltip();
initMostrarGotop();


const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

const stars = [];
const numStars = 200; // Número de estrelas

// Criar estrelas com posição e movimento aleatório
for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2, // Tamanho da estrela
        speedX: (Math.random() - 0.5) * 0.3, // Movimento horizontal
        speedY: (Math.random() - 0.5) * 0.3  // Movimento vertical
    });
}

// Desenhar as estrelas
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Animar as estrelas
function animateStars() {
    drawStars();
    
    stars.forEach(star => {
        star.x += star.speedX;
        star.y += star.speedY;

        // Se sair da tela, reaparece do outro lado
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
    });

    requestAnimationFrame(animateStars);
}

animateStars();

// Redimensionar o canvas se a janela mudar de tamanho
window.addEventListener("resize", resizeCanvas);





//Codigo de digitacao da palavra Desenvolvedor Web
const text = "Desenvolvedor Web"; // Texto que será digitado
const typingElement = document.getElementById("typing-text");
let index = 0;
let isDeleting = false; // Indica se está apagando

function typeText() {
    if (!isDeleting && index < text.length) {
        // Digita letra por letra
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 150); // Velocidade da digitação
    } 
    else if (isDeleting && index > 0) {
        // Apaga letra por letra
        typingElement.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(typeText, 100); // Velocidade da exclusão
    } 
    else {
        // Alterna entre digitar e apagar
        isDeleting = !isDeleting;
        setTimeout(typeText, 1000); // Pausa antes de inverter o processo
    }
}

typeText();







