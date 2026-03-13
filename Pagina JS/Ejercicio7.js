const btnCalc   = document.getElementById('btnCalc');
const resultado = document.getElementById('resultado');

btnCalc.addEventListener('click', function() {

  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const op   = document.getElementById('operacion').value;

  if (document.getElementById('num1').value === '' ||
      document.getElementById('num2').value === '') {
    resultado.textContent = 'Ingresa los dos números.';
    return;
  }

  let res;

  switch (op) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultado.textContent = 'Error: no se puede dividir entre 0.';
        return;
      }
      res = num1 / num2;
      break;
  }

  resultado.textContent = 'Resultado: ' + res;
});