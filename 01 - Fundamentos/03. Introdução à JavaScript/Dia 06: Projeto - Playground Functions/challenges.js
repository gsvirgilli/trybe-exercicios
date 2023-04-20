// Desafio 1 - Crie a função compareTrue
const compareTrue = (parametro1, parametro2) => parametro1 && parametro2;
// Desafio 2 - Crie a função splitSentence
const splitSentence = (frase) => frase.split(' ');
// Desafio 3 - Crie a função concatName
const concatName = (arr) => {
  let primeiro = arr[0];
  let ultimo = arr[arr.length - 1];
  return `${ultimo}, ${primeiro}`;
};
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => {
  let vitorias = wins * 3;
  let empates = ties * 1;
  return vitorias + empates;
};
// Desafio 5 - Crie a função highestCount
const highestCount = (numeros) => {
  let soma = Math.max(...numeros);
  let calculo = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (soma <= numeros[index]) {
      calculo += 1;
    }
  }
  return calculo;
};
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, altura) => (base * altura) / 2;
const calcRectangleArea = (base, altura) => base * altura;
const calcAllAreas = (base, altura, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(
      base,
      altura
    )}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(
      base,
      altura
    )}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);
  if (gato2 === gato1) {
    return 'os gatos trombam e o rato foge';
  }
  if (gato1 < gato2) {
    return 'cat1';
  }
  if (gato2 < gato1) {
    return 'cat2';
  }
};
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (arr) => {
  let arei = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      arei.push('fizzBuzz');
    } else if (arr[index] % 3 === 0) {
      arei.push('fizz');
    } else if (arr[index] % 5 === 0) {
      arei.push('buzz');
    } else {
      arei.push('bug!');
    }
  }
  return arei;
};
// Desafio 9 - Crie a função encode e a função decode
const encode = (frase) => {
  let novo = frase;
  novo = novo.replace(/a/gi, '1');
  novo = novo.replace(/e/gi, '2');
  novo = novo.replace(/i/gi, '3');
  novo = novo.replace(/o/gi, '4');
  novo = novo.replace(/u/gi, '5');
  return novo;
};
const decode = (frase) => {
  let novo = frase;
  novo = novo.replace(/1/gi, 'a');
  novo = novo.replace(/2/gi, 'e');
  novo = novo.replace(/3/gi, 'i');
  novo = novo.replace(/4/gi, 'o');
  novo = novo.replace(/5/gi, 'u');
  return novo;
};
// Desafio 10 - Crie a função techList
const techList = (arr, nome) => {
  arr.sort();
  for (let index = 0; index < arr.length; index += 1) {
    arr[index] = {
      tech: arr[index],
      name: nome,
    };
  }
  return arr;
};
// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => {},
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => {},
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => {},
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => {},
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => {},
  concatName: typeof concatName === 'function' ? concatName : () => {},
  decode: typeof decode === 'function' ? decode : () => {},
  encode: typeof encode === 'function' ? encode : () => {},
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  highestCount: typeof highestCount === 'function' ? highestCount : () => {},
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  techList: typeof techList === 'function' ? techList : () => {},
};
