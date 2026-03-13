const btnRojo  = document.getElementById('btnRojo');
const btnAzul  = document.getElementById('btnAzul');
const btnVerde = document.getElementById('btnVerde');

btnRojo.addEventListener('click', function() {
  document.body.style.backgroundColor = 'red';
});

btnAzul.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});

btnVerde.addEventListener('click', function() {
  document.body.style.backgroundColor = 'green';
});