let saldo =200;

function adicionaSaldo (valor){
    return valor + saldo;
};

function menoSaldo (valor){
    return saldo - valor;
};

function multSaldo (valor){
    return valor * saldo;
};

function divideSaldo (valor){
    return  saldo / valor;
};

console.log(adicionaSaldo(20));
console.log(menoSaldo(1));
console.log(multSaldo(3));
console.log(divideSaldo(2));
