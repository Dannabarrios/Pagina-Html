const btnEnviar = document.getElementById('btnEnviar');
const mensaje   = document.getElementById('mensaje');

btnEnviar.addEventListener('click', function() {

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const edad   = document.getElementById('edad').value.trim();

  if (nombre === '' || correo === '' || edad === '') {
    mensaje.textContent = 'Debe completar todos los campos';
    mensaje.className = 'Error';
  } else {
    mensaje.textContent = '¡Formulario enviado correctamente!';
    mensaje.className = 'Ok';
  }
});
