function initMostrarGotop() {
  function mostrarGotop() {
    const btntop = document.querySelector(".gotop");
    const distanciaScroll = window.innerHeight * 0.6;

    if (window.scrollY > distanciaScroll) {
      btntop.classList.add("ativo");
    } else {
      btntop.classList.remove("ativo");
    }
  }

  window.addEventListener("scroll", mostrarGotop);
}