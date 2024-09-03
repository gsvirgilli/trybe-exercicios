// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'uva', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melancia', 'laranja', 'tomate'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));