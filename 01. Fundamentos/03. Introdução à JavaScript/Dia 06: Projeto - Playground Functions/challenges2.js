// Desafio 11 - Crie a função generatePhoneNumber
const generatePhoneNumber = (arr) => {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arr.length; index += 1) {
    let contador = 0;
    for (let index2 = 0; index2 < arr.length; index2 += 1) {
      if (arr[index] === arr[index2]) contador += 1;
    }
    if (contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] < 0 || arr[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  const telefone = `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
  return telefone;
};
// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA, lineB, lineC) => {
  if (
    lineA < lineB + lineC &&
    lineA > lineB - lineC &&
    lineB < lineA + lineC &&
    lineB > lineA - lineC &&
    lineC < lineA + lineB &&
    lineC > lineA - lineB
  ) {
    return true;
  }
  return false;
};
// Desafio 13 - Crie a função hydrate
const hydrate = (frase) => {
  let numeros = frase.match(/\d+/g);
  let soma = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    soma += Number(numeros[index]);
  }
  if (soma > 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`;
};
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber:
    typeof generatePhoneNumber === 'function' ? generatePhoneNumber : () => {},
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : () => {},
  hydrate: typeof hydrate === 'function' ? hydrate : () => {},
};
