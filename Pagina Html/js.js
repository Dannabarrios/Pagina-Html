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