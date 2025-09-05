export default function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.projeto-slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const indicators = document.querySelectorAll('.indicator');
  const currentSlideSpan = document.getElementById('currentSlide');
  const totalSlidesSpan = document.getElementById('totalSlides');
  const progressBar = document.getElementById('progressBar');

  if (!track || !slides.length) return;

  let currentSlide = 0;
  const totalSlides = slides.length;

  // Remover contador - carrossel infinito
  if (totalSlidesSpan) {
    totalSlidesSpan.style.display = 'none';
  }
  if (currentSlideSpan) {
    currentSlideSpan.style.display = 'none';
  }
  // Esconder a barra separadora também
  const separator = document.querySelector('.slide-counter span:nth-child(2)');
  if (separator) {
    separator.style.display = 'none';
  }

  // Função para ir para um slide específico
  function goToSlide(slideIndex) {
    // Remover classe active de todos os slides e indicadores
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Adicionar classe active ao slide e indicador atual
    slides[slideIndex].classList.add('active');
    if (indicators[slideIndex]) {
      indicators[slideIndex].classList.add('active');
    }

    // Mover o track
    const translateX = -slideIndex * 33.333;
    track.style.transform = `translateX(${translateX}%)`;

    currentSlide = slideIndex;
    updateButtons();
  }

  // Função para ir para o próximo slide
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextIndex);
  }

  // Função para ir para o slide anterior
  function prevSlide() {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prevIndex);
  }

  // Atualizar estado dos botões
  function updateButtons() {
    // Carrossel infinito - botões sempre habilitados
    if (prevBtn) {
      prevBtn.disabled = false;
    }
    if (nextBtn) {
      nextBtn.disabled = false;
    }
  }

  // Event listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
    });
  }

  // Indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      goToSlide(index);
    });
  });

  // Navegação por teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });

  // Touch/Swipe support
  let startX = 0;
  let endX = 0;
  const minSwipeDistance = 50;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener('touchmove', (e) => {
    e.preventDefault();
  });

  track.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const swipeDistance = startX - endX;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  });

  // Mouse drag support
  let isDragging = false;
  let startMouseX = 0;
  let endMouseX = 0;

  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startMouseX = e.clientX;
    track.style.cursor = 'grabbing';
    e.preventDefault();
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
  });

  track.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    
    isDragging = false;
    endMouseX = e.clientX;
    track.style.cursor = 'grab';
    
    const swipeDistance = startMouseX - endMouseX;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  });

  track.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      track.style.cursor = 'grab';
    }
  });

  // Inicializar
  goToSlide(0);
}