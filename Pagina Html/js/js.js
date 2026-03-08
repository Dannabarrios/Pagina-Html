function enviarFormulario() {
  const nombre = document.getElementById('nombre').value.trim();
  const email  = document.getElementById('email').value.trim();
  if (!nombre || !email) {
    alert('⚠️ Por favor completa al menos el nombre y el correo.');
    return;
  }
  const success = document.getElementById('success-msg');
  success.style.display = 'block';
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});
// ===========================
// SELECTOR DE TEMAS
// ===========================
const themeBtns = document.querySelectorAll('.theme-btn');

themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // Quitar active de todos
    themeBtns.forEach(b => b.classList.remove('active'));

    // Poner active al clickeado
    btn.classList.add('active');

    // Cambiar el tema en el <html>
    document.documentElement.setAttribute('data-theme', btn.dataset.theme);

    // Guardar preferencia
    localStorage.setItem('tema', btn.dataset.theme);
  });
});

// Cargar tema guardado al abrir la página
const temaGuardado = localStorage.getItem('tema');
if (temaGuardado) {
  document.documentElement.setAttribute('data-theme', temaGuardado);
  themeBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.theme === temaGuardado) {
      btn.classList.add('active');
    }
  });
}
// ===========================
// FLOATING BUTTON
// ===========================
const floatingBtn  = document.getElementById('floatingBtn');
const floatingIcon = document.getElementById('floatingIcon');

// Mostrar botón solo cuando el usuario scrollea
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    floatingBtn.classList.add('visible');
  } else {
    floatingBtn.classList.remove('visible');
  }

  // Cambiar icono según posición
  const mitadPagina = document.body.scrollHeight / 2;
  if (window.scrollY < mitadPagina) {
    floatingIcon.textContent = '⬇️'; // está arriba → bajar
  } else {
    floatingIcon.textContent = '⬆️'; // está abajo → subir
  }
});

// Al hacer clic sube o baja según posición
floatingBtn.addEventListener('click', () => {
  const mitadPagina = document.body.scrollHeight / 2;
  if (window.scrollY < mitadPagina) {
    // Está arriba → va al final
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  } else {
    // Está abajo → va al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});