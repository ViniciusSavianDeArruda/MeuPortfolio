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
  let autoPlayInterval;
  let progressInterval;
  const autoPlayDelay = 5000; // 5 segundos

  // Atualizar contador total
  if (totalSlidesSpan) {
    totalSlidesSpan.textContent = totalSlides;
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
    const translateX = -slideIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;

    // Atualizar contador
    if (currentSlideSpan) {
      currentSlideSpan.textContent = slideIndex + 1;
    }

    currentSlide = slideIndex;
    updateButtons();
    resetAutoPlay();
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
    if (prevBtn) {
      prevBtn.disabled = currentSlide === 0;
    }
    if (nextBtn) {
      nextBtn.disabled = currentSlide === totalSlides - 1;
    }
  }

  // Auto-play functionality
  function startAutoPlay() {
    let progress = 0;
    
    progressInterval = setInterval(() => {
      progress += 100 / (autoPlayDelay / 100);
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    }, 100);

    autoPlayInterval = setInterval(() => {
      nextSlide();
    }, autoPlayDelay);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
    }
    if (progressInterval) {
      clearInterval(progressInterval);
    }
    if (progressBar) {
      progressBar.style.width = '0%';
    }
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
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
    stopAutoPlay();
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
    } else {
      resetAutoPlay();
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
    stopAutoPlay();
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
    } else {
      resetAutoPlay();
    }
  });

  track.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      track.style.cursor = 'grab';
      resetAutoPlay();
    }
  });

  // Pausar auto-play quando hover no carrossel
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);
  }

  // Pausar auto-play quando a aba não está visível
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  // Inicializar
  goToSlide(0);
  startAutoPlay();

  // Intersection Observer para pausar quando não está visível
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAutoPlay();
      } else {
        stopAutoPlay();
      }
    });
  }, { threshold: 0.5 });

  if (carouselContainer) {
    observer.observe(carouselContainer);
  }

  // Cleanup function
  return () => {
    stopAutoPlay();
    if (observer && carouselContainer) {
      observer.unobserve(carouselContainer);
    }
  };
}