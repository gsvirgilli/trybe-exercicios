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
  const bmi = handleBMI(weightInKg, heightInM);

  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();