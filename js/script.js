import initTooltip from "./modules/tooltip.js";
import initMostrarGotop from "./modules/gotop.js";

new SimpleAnime();
initTooltip();
initMostrarGotop();

const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 200;

function createStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    });
  }
}

function resizeCanvas() {
  const oldWidth = canvas.width;
  const oldHeight = canvas.height;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Reposiciona proporcionalmente
  stars.forEach(star => {
    star.x = star.x * (canvas.width / oldWidth);
    star.y = star.y * (canvas.height / oldHeight);
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function animateStars() {
  drawStars();

  stars.forEach(star => {
    star.x += star.speedX;
    star.y += star.speedY;

    // Loop infinito de movimento
    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;
  });

  requestAnimationFrame(animateStars);
}

// Inicialização
resizeCanvas();
createStars();
animateStars();

// Atualiza tamanho da tela e ajusta estrelas
window.addEventListener("resize", () => {
  resizeCanvas();
});






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


document.addEventListener("DOMContentLoaded", () => {
  const ano = new Date().getFullYear();
  document.getElementById("ano-atual").textContent = ano;
});



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusDiv.textContent = 'Enviando...';

    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        statusDiv.textContent = 'Mensagem enviada com sucesso! 🙌';
        form.reset();
      } else {
        const err = await response.json();
        statusDiv.textContent = err.error || 'Erro ao enviar. Tente mais tarde.';
      }
    } catch (error) {
      statusDiv.textContent = 'Erro de rede. Verifique sua conexão.';
    }
  });
});




// Atualização apenas para mostrar novo commit no GitHub





