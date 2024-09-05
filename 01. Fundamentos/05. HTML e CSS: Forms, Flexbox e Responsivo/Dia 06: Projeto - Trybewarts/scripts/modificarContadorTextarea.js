const contador = document.getElementById('counter');
const textarea = document.getElementById('textarea');

const calcularNovoValorContador = () => 500 - parseInt(textarea.value.length, 10);

textarea.addEventListener('input', () => {
  contador.innerText = calcularNovoValorContador();
});
