let intervalo = null;
let segundos  = 0;

const display      = document.getElementById('display');
const estado       = document.getElementById('estado');
const btnIniciar   = document.getElementById('btnIniciar');
const btnDetener   = document.getElementById('btnDetener');
const btnReiniciar = document.getElementById('btnReiniciar');

function formatear(seg) {
  const m = Math.floor(seg / 60).toString().padStart(2, '0');
  const s = (seg % 60).toString().padStart(2, '0');
  return m + ':' + s;
}

btnIniciar.addEventListener('click', function() {
  if (intervalo !== null) return;

  intervalo = setInterval(function() {
    segundos++;
    display.textContent = formatear(segundos);
  }, 1000);

  estado.textContent = 'Corriendo...';
});

btnDetener.addEventListener('click', function() {
  clearInterval(intervalo);
  intervalo = null;
  estado.textContent = 'Detenido en ' + formatear(segundos);
});

btnReiniciar.addEventListener('click', function() {
  clearInterval(intervalo);
  intervalo = null;
  segundos  = 0;
  display.textContent = '00:00';
  estado.textContent  = 'Presiona Iniciar para comenzar.';
});