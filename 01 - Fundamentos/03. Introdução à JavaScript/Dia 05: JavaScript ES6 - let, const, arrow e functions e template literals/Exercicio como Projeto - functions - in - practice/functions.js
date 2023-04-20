// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.
const ligarDesligar = (Chave) => {
  Chave = Chave === 'desligado' ? 'ligado' : 'desligado';
  console.log(`O motor está ${Chave}`);
  return Chave;
};
// 2 - Crie a função circleArea, que calcule a área de um círculo.
const circleArea = (raio) => {
  const pi = 3.14;
  if (typeof raio !== 'number') {
    return 'O parâmetro radius deve ser um número';
  }
  let area = pi * raio ** 2;
  return `Essa é a área do círculo: ${area}`;
};
// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
const longestWord = (frase) => {
  const palavras = frase.split(' ');
  let maiorPalavra = '';
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index].length > maiorPalavra.length) {
      maiorPalavra = palavras[index];
    }
  }
  return maiorPalavra;
};
// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : () => {},
  circleArea: typeof circleArea === 'function' ? circleArea : () => {},
  longestWord: typeof longestWord === 'function' ? longestWord : () => {},
};
