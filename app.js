// Tamaños de fuente disponibles (porcentaje sobre el base del navegador)
const FONT_STEPS = [100, 120, 140];
let currentStep = 0;

function increaseFont() {
  if (currentStep < FONT_STEPS.length - 1) {
    currentStep++;
    applyFontSize();
  }
}

function decreaseFont() {
  if (currentStep > 0) {
    currentStep--;
    applyFontSize();
  }
}

function applyFontSize() {
  document.documentElement.style.fontSize = FONT_STEPS[currentStep] + '%';
  document.getElementById('btn-decrease').disabled = currentStep === 0;
  document.getElementById('btn-increase').disabled = currentStep === FONT_STEPS.length - 1;
}

function toggleContrast() {
  const body = document.body;
  const btn = document.getElementById('btn-contrast');
  const isActive = body.classList.toggle('high-contrast');
  btn.setAttribute('aria-pressed', String(isActive));
  btn.setAttribute('aria-label', isActive ? 'Desactivar modo alto contraste' : 'Activar modo alto contraste');
}

// Menú mobile
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('btn-menu');
  const isOpen = !menu.classList.contains('hidden');
  menu.classList.toggle('hidden');
  btn.setAttribute('aria-expanded', String(!isOpen));
}

function closeMenu() {
  document.getElementById('mobile-menu').classList.add('hidden');
  document.getElementById('btn-menu').setAttribute('aria-expanded', 'false');
}

// Cerrar menú mobile al hacer clic fuera
document.addEventListener('click', function (e) {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('btn-menu');
  if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
    closeMenu();
  }
});

// Estado inicial de los botones de fuente
document.getElementById('btn-decrease').disabled = true;
