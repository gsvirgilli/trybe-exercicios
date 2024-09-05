const submit = document.querySelector('#submit-btn');


const buscarValores = () => {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const família = document.querySelector('input[name=family]:checked').value;
  const avaliação = document.querySelector('input[name=rate]:checked').value;
  const observações = document.querySelector('#textarea').value;
  const camposMaterias = document.querySelectorAll('input[name=subject]:checked');
  let matérias = '';
  camposMaterias.forEach(({ value }, index) => {
    const separador = index === 0 ? '' : ', ';
    matérias += separador + value;
  });

  return { 
    nome: `${nome} ${sobrenome}\n`,
    email: `  \n  ${email}\n`,
    casa: `${casa}`,
    família: `${família}\n`,
    matérias: `${matérias}\n`,
    avaliação: `${avaliação}\n`,
    observações: `${observações}\n`,
   };
};

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const dadosForm = buscarValores();
  const novoForm = document.createElement('div');
  novoForm.id = 'form-data';

  Object.entries(dadosForm).forEach(([chave, valor]) => {
    const novoP = document.createElement('p');
    novoP.textContent = `${chave.replace(chave[0], chave[0].toUpperCase())}: ${valor}`;
    novoForm.appendChild(novoP);
  });

  document.querySelector('#evaluation-form').classList.add('principal__form--escondido');
  document.querySelector('.principal').append(novoForm);
});
