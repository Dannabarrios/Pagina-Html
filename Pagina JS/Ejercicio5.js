const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const lista      = document.getElementById('lista');

btnAgregar.addEventListener('click', function() {
  const texto = inputTarea.value.trim();

  if (texto === '') return;

  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);

  inputTarea.value = '';
  inputTarea.focus();
});

inputTarea.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') btnAgregar.click();
});