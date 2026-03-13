let contador = 0;

const numero    = document.getElementById('numero');
const btnContar = document.getElementById('btnContar');
const btnReset  = document.getElementById('btnReset');

btnContar.addEventListener('click', function() {
  contador++;
  numero.textContent = contador;
});

btnReset.addEventListener('click', function() {
  contador = 0;
  numero.textContent = contador;
});