// Requisito 1 - Crie a função verificaPalindromo
function verificaPalindromo(palavra) {
  const word = palavra;
  palavra = palavra.split('');
  let palavraInvertida = palavra;
  palavraInvertida = palavraInvertida.reverse();
  palavraInvertida = palavraInvertida.join('');
  if (word === palavraInvertida) {
    return true;
  }
  return false;
}
// Requisito 2 - Crie a função indiceDoMaior
function indiceDoMaior(indMaior) {
  let index1 = 0;
  let calculo = 0;
  for (let index = 0; index < indMaior.length; index += 1) {
    if (indMaior[index] > calculo) {
      calculo = indMaior[index];
      index1 = index;
    }
  }
  return index1;
}
// Requisito 3 - Crie a função indiceDoMenor
function indiceDoMenor(indMenor) {
  let index1 = 0;
  let calculo = indMenor[0];
  for (let index = 1; index < indMenor.length; index += 1) {
    if (indMenor[index] < calculo) {
      calculo = indMenor[index];
      index1 = index;
    }
  }
  return index1;
}
// Requisito 4 - Crie a função maiorPalavra
function maiorPalavra(palaMaior) {
  let palavra = palaMaior[0];
  for (let index = 1; index < palaMaior.length; index += 1) {
    if (palaMaior[index].length > palavra.length) {
      palavra = palaMaior[index];
    }
  }
  return palavra;
}
// Requisito 5 - Crie a função maisRepetido
function maisRepetido(maisLoop) {
  let array = [];
  let calculo = 0;
  for (let index = 0; index < maisLoop.length; index += 1) {
    let calculoPro = 0;
    for (let index1 = 0; index1 < maisLoop.length; index1 += 1) {
      if (maisLoop[index] === maisLoop[index1]) {
        calculoPro += 1;
      }
    }
    if (calculoPro > calculo) {
      calculo = calculoPro;
      array = maisLoop[index];
    }
  }
  return array;
}
// Requisito 6 - Crie a função somatorio
function somatorio(n) {
  let soma = 1;
  if (n > 0) {
    for (let index = 2; index <= n; index += 1) {
      soma = soma + index; 
    }
  } else {
    return 'ERRO';
  }
  return soma;
}
// Requisito 7 - Crie a função verificaFimPalavra
function verificaFimPalavra(palavra1, palavra2) {
  const aqui = palavra2.length;
  let aqui1 = palavra1.slice(palavra1.length - aqui);
  if (palavra2 === aqui1) {
    return true;
  }
  return false;
}
// Não modifique essas linhas
module.exports = {
  verificaPalindromo:
    typeof verificaPalindromo === 'function' ? verificaPalindromo : () => {},
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : () => {},
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : () => {},
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : () => {},
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : () => {},
  somatorio: typeof somatorio === 'function' ? somatorio : () => {},
  verificaFimPalavra:
    typeof verificaFimPalavra === 'function' ? verificaFimPalavra : () => {},
};
