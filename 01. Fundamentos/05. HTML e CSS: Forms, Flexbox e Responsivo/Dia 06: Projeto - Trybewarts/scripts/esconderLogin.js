const botaoMenu = document.querySelector('.header-menu');
const menuLogin = document.querySelector('.trybewarts-login');

if (window.innerWidth <= 768) {
  menuLogin.classList.add('trybewarts-login--fechado');
}

botaoMenu.addEventListener('click', () => {
  menuLogin.classList.toggle('trybewarts-login--fechado');
});