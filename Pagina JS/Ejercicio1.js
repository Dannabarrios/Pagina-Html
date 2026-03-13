const boton     = document.getElementById('btnMensaje');
const resultado = document.getElementById('resultado');

boton.addEventListener('click', function() {
  resultado.textContent = 'Hola mundo desde JavaScript';
});

