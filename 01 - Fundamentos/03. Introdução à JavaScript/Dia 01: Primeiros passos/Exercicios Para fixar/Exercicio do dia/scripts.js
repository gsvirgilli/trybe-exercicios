/* 001 */

/* 02 */
if (a > b){
    console.log("Á variavel a é maior que á b !")
}else {
    console.log("Á variavel b é maior que á a !")
}

/* 03 */
let a = 10;
let b = 5;
let c = 3;

if(a > b && a > c){
    console.log("O maior Numero é: "+a);
}else if (b > a && b > c){
    console.log("O Maior Numero é: "+b);
}else {
    console.log("O Maior Numero é: "+c);
}

/* 04 */
let num = -3;

if(num < 0){
    console.log("negative");
}else if(num > 0){
    console.log("positive");
}else {
    console.log("zero");
}

/* 05  FOGUETE  */
let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;

let total = angulo1 + angulo2 + angulo3;

if (total > 0) {
    if(total === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
    
} else {
    console.log("Erro: ângulo inválido!");
}

/* 06 */
let pecas = Rainha;

switch (pecas) {
    case "Peão":
        console.log("Os peões se movem somente para frente, uma casa por vez");
        break;
    case "Bispo":
        console.log("O bispo se move em uma linha reta diagonalmente no tabuleiro.");
        break;
    case "Torre":
        console.log("A torre se move em linha reta horizontalmente e verticalmente");
        break;
    case "Cavalo":
        console.log("O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.");
        break;
    case "Rainha":
        console.log("Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
        break;
    case "Rei":
        console.log(" O rei pode se mover para qualquer casa adjacente.")
        break;
    default;
}

/* 07 */
let grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

/* 08 */

let a = 1;
let b = 3;
let c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

/* 09 */

let a1 = 1;
let b2 = 3;
let c3 = 5;

let isOdd = true;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isOdd = false;
};
console.log(isEven);

/* 10 */


let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos!");
};

/* 11 */


let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
