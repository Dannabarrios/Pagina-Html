const btnSumar  = document.getElementById('btnSumar');
const resultado = document.getElementById('resultado');

btnSumar.addEventListener('click', function() {

  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);

  if (document.getElementById('num1').value === '' ||
      document.getElementById('num2').value === '') {
    resultado.textContent = 'Por favor ingresa los dos números.';
    return;
  }

  const suma = num1 + num2;
  resultado.textContent = 'Resultado: ' + suma;
});