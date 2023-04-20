const submit = document.querySelector('#submit-btn');
const formInputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const limparBtn = document.querySelector('#clear-btn');
submit.setAttribute('disabled', true);

limparBtn.addEventListener('click', () => {
  for (let index = 0; index < formInputs.length; index += 1) {
    const userInput = formInputs[index];
    if (formInputs[index].type === 'radio' || formInputs[index].type === 'checkbox'
    ) {
      userInput.checked = false;
    } else {
      userInput.value = '';
    }
  }
  textArea.value = '';
});
const validateInput = () => {
  const agree = document.querySelector('#agreement');
  if (agree.checked === true) {
    return true;
  }
  return false;
};
const agreement = document.querySelector('#agreement');
agreement.addEventListener('click', () => {
  if (validateInput() === true) {
    submit.removeAttribute('disabled');
  } else {
    submit.setAttribute('disabled', true);
  }
});

submit.addEventListener('click', (event) => {
  event.preventDefault();
});
