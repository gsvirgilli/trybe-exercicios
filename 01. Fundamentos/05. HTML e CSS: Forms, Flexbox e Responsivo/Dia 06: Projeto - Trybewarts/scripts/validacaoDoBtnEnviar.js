const checkbox = document.querySelector('#agreement');
const btnEnviar = document.querySelector('#submit-btn');
btnEnviar.setAttribute('disabled', true);

const validação = () => {
  if (checkbox.checked === true) {
    return true;
  }
  return false;
};

checkbox.addEventListener('click', () => {
  if (validação() === true) {
    btnEnviar.removeAttribute('disabled');
  } else {
    btnEnviar.setAttribute('disabled', true);
  }
});
