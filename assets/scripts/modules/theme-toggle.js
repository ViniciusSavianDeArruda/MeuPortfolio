// Sistema de alternância entre modo claro e escuro
function initThemeToggle() {
  const THEME_KEY = 'portfolio-theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  // Aguardar DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Elementos do DOM
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    if (!themeToggle) {
      console.error('Botão de tema não encontrado!');
      return;
    }

    // Obter tema salvo ou usar o tema padrão (dark)
    function getSavedTheme() {
      const savedTheme = localStorage.getItem(THEME_KEY);
      return savedTheme || THEME_DARK;
    }

    // Salvar tema no localStorage
    function saveTheme(theme) {
      localStorage.setItem(THEME_KEY, theme);
    }

    // Aplicar tema
    function applyTheme(theme, skipTransition = false) {
      // Desabilitar transições temporariamente para troca instantânea
      if (skipTransition) {
        html.classList.add('theme-transitioning');
      }
      
      html.setAttribute('data-theme', theme);
      updateToggleIcon(theme);
      
      // Reabilitar transições após a troca
      if (skipTransition) {
        // Forçar reflow
        html.offsetHeight;
        
        // Remover classe após um frame
        requestAnimationFrame(() => {
          html.classList.remove('theme-transitioning');
        });
      }
      
      console.log('Tema aplicado:', theme);
    }

    // Atualizar ícone do botão
    function updateToggleIcon(theme) {
      if (!themeToggle) return;
      
      const icon = themeToggle.querySelector('.theme-icon');
      if (!icon) return;
      
      if (theme === THEME_LIGHT) {
        // Ícone de lua (modo escuro disponível)
        icon.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;
      } else {
        // Ícone de sol (modo claro disponível)
        icon.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `;
      }
    }

    // Alternar tema
    function toggleTheme() {
      const currentTheme = html.getAttribute('data-theme') || THEME_DARK;
      const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
      
      console.log('Alternando tema:', currentTheme, '->', newTheme);
      
      applyTheme(newTheme, true); // skipTransition = true para troca instantânea
      saveTheme(newTheme);

      // Adicionar animação de pulse ao botão
      themeToggle.classList.add('pulse');
      setTimeout(() => themeToggle.classList.remove('pulse'), 300);
    }

    // Aplicar tema inicial
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);

    // Event listener no botão
    themeToggle.addEventListener('click', toggleTheme);
    
    // Adicionar atributos de acessibilidade
    themeToggle.setAttribute('aria-label', 'Alternar tema claro/escuro');
    themeToggle.setAttribute('role', 'button');
    
    console.log('Theme toggle inicializado!');
  }
}
