const readline = require('readline-sync');

const weightInKg = 66;
const heightInM = 1.80;


function handleBMI(weight, height) {
  console.log(`Weight: ${weightInKg}, Height: ${heightInM}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
}

function main() {
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
  const height = readline.questionInt('What\'s your height? (cm) ');

  const bmi = handleBMI(weight, height);

  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();