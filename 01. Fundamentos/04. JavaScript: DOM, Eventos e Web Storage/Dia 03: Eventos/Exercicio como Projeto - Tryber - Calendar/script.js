
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

const diasDosMes = () => {
  const colocandoOsDias = document.querySelector('#days');
  for (let index = 0; index < decemberDaysList.length; index += 1){
    const cadaDia = document.createElement('li');
    const dia = decemberDaysList[index];
    cadaDia.innerHTML = dia;
    cadaDia.className = 'day';
    if (dia === 24 || dia === 25 || dia === 31) {
      cadaDia.classList.add('holiday');
    }
    if (dia === 4 || dia === 11 ||  dia === 18 || dia === 25){
      cadaDia.classList.add('friday');
    }
    colocandoOsDias.appendChild(cadaDia);
  }
};
diasDosMes();