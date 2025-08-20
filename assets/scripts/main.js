import initTooltip from "./modules/tooltip.js";
import initMostrarGotop from "./modules/gotop.js";

// Inicialização das animações
new SimpleAnime();
initTooltip();
initMostrarGotop();

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.menu');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    menu.classList.toggle('active');
  });
  
  // Fechar menu ao clicar fora
  document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
    }
  });
  
  // Fechar menu ao redimensionar tela
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
    }
  });
}

// Efeito de digitação melhorado
const texts = ["Desenvolvedor Web", "Estudante de SI", ""];
const typingElement = document.getElementById("typing-text");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = texts[textIndex];
  
  if (!isDeleting && charIndex < currentText.length) {
    typingElement.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } 
  else if (isDeleting && charIndex > 0) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeText, 50);
  } 
  else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeText, 2000);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, 500);
    }
  }
}

typeText();

// Atualização do ano no footer
document.addEventListener("DOMContentLoaded", () => {
  const ano = new Date().getFullYear();
  const anoElement = document.getElementById("ano-atual");
  if (anoElement) {
    anoElement.textContent = ano;
  }
});

// Formulário de contato melhorado
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const statusDiv = document.getElementById('form-status');

  if (form && statusDiv) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      statusDiv.textContent = 'Enviando...';
      statusDiv.classList.add('show');

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
      
      setTimeout(() => {
        statusDiv.classList.remove('show');
      }, 5000);
    });
  }
});

// Scroll suave melhorado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Fechar menu mobile se estiver aberto
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    }
  });
});

// Animações de entrada para elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.projeto-card, .skill-item, .sobre-img, .sobre-conteudo').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Efeito de hover nos cards de projeto
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.projeto-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Preloader simples
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});