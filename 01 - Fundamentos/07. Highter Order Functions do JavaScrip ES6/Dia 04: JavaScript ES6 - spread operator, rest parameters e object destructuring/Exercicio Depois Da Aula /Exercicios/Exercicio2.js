const sum = (...numbers) => {};

const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);