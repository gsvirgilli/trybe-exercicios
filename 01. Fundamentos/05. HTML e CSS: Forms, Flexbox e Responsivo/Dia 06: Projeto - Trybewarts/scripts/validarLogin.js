const btnHeader = document.querySelector('#btn-header');
const inputEmail = document.querySelector('#input-Email');
const inputSenha = document.querySelector('#input-Senha');

btnHeader.addEventListener('click', () => {
  const validacao = inputEmail.value === 'tryber@teste.com' || inputSenha.value === '123456';
  const mensagem = validacao ? 'Olá, Tryber!' : 'Email ou senha inválidos.';
  alert(mensagem);
});
