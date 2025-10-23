// Minimal tooltip module
// Exposes initTooltip() which attaches a data-tooltip handler to elements
// that have `data-tooltip="..."`. The tooltip is a small accessible UI
// that appears on mouseenter/focus and hides on mouseleave/blur.

export default function initTooltip() {
  const TOOLTIP_ID = 'site-tooltip';

  // Create tooltip element once
  let tooltipEl = document.getElementById(TOOLTIP_ID);
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = TOOLTIP_ID;
    tooltipEl.setAttribute('role', 'status');
    tooltipEl.setAttribute('aria-hidden', 'true');
    tooltipEl.style.position = 'fixed';
    tooltipEl.style.pointerEvents = 'none';
    tooltipEl.style.background = 'rgba(0,0,0,0.8)';
    tooltipEl.style.color = '#fff';
    tooltipEl.style.padding = '6px 8px';
    tooltipEl.style.borderRadius = '4px';
    tooltipEl.style.fontSize = '13px';
    tooltipEl.style.zIndex = '9999';
    tooltipEl.style.transition = 'opacity 150ms ease';
    tooltipEl.style.opacity = '0';
    document.body.appendChild(tooltipEl);
  }

  let activeTarget = null;

  function showTooltip(target) {
    const text = target.getAttribute('data-tooltip');
    if (!text) return;
    tooltipEl.textContent = text;
    tooltipEl.setAttribute('aria-hidden', 'false');
    tooltipEl.style.opacity = '1';
    activeTarget = target;
  }

  function hideTooltip() {
    tooltipEl.setAttribute('aria-hidden', 'true');
    tooltipEl.style.opacity = '0';
    activeTarget = null;
  }

  function moveTooltip(x, y) {
    // offset so cursor doesn't cover the tooltip
    const offset = 12;
    tooltipEl.style.left = `${x + offset}px`;
    tooltipEl.style.top = `${y + offset}px`;
  }

  // Attach handlers to any element with data-tooltip
  const elements = document.querySelectorAll('[data-tooltip]');
  elements.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
      showTooltip(el);
      moveTooltip(e.clientX, e.clientY);
    });
    el.addEventListener('mousemove', (e) => {
      if (activeTarget === el) moveTooltip(e.clientX, e.clientY);
    });
    el.addEventListener('mouseleave', hideTooltip);

    // keyboard accessibility
    el.addEventListener('focus', (e) => showTooltip(el));
    el.addEventListener('blur', hideTooltip);
  });

  // Expose a simple API in case other scripts want to use it
  return {
    show: showTooltip,
    hide: hideTooltip
  };
}
