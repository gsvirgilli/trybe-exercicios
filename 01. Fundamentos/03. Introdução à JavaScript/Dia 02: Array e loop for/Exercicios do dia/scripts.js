/* /* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; inde += 1){
    console.log(numbers[index]);
    soma+= numbers[index];
}
console.log(soma);
let media = soma / numbers.length;
console.log(media);
if(media>20){
    console.log("Valor maior que 20");
}else {
    console.log("Valor menor ou igual a 20");
}
let resultado = numbers[0] ;
for (let index = 1; index < numbers.length;index+=1 ){
    if(resultado<numbers[index]){
        resultado = numbers[index];
    }else{

    }
}
console.log(resultado);
let resultado1 =0;
for(let index=0;index < numbers.length;index+=1){
    if (numbers[index]%2 !== 0) {
        resultado1 += 1;
    }
}
if(resultado1 == 0){
    console.log("Nenhum valor ímpar encontrado")
}else{
    console.log(resultado1);
}

let novo = numbers[0];
for(let index =1;index < numbers.length;index +=1){
    if(novo > numbers[index]){
        novo = numbers[index];
    }
}
console.log(novo);

let numeros = [];
for (let index =1;index <=25;index+=1){
    numeros.push(index);
}
console.log(numeros)
let div=0;
for(let index =0; index < numeros.length;index+=1){
    div = numbers[index] / 2;
    console.log(div);
}

let fatorial = 1;

for (let index = 10; index>0;index -= 1){
    fatorial*= index;
}
console.log(fatorial);
 */
/* let word = 'roma';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);
 */
let array = ['java', 'javascript', 'python', 'html', 'css'];

let resultadoMaior = array[0];
let resultadoMenor = array[0];


for(let index=1;index< array.length;index+=1){
    if(array[index].length>resultadoMaior.length){
        resultadoMaior = array[index];
    }
}
console.log(resultadoMaior);


for(let index=1;index< array.length;index+=1){
    if(array[index].length<resultadoMenor.length){
        resultadoMenor = array[index];
    }
}

console.log(resultadoMenor);