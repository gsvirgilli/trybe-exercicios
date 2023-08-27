let clientesTrybeBank = ['Ada', 'John', 'Gus'];

/* function Trybe (colocar){
    if(typeof colocar === "string"){
        clientesTrybeBank.push(colocar);
        return "Cliente adicionado!!";
    }else{
        return "Erro! ("+colocar+") Não é do tipo string !!"
    }
};
console.log(Trybe("Ana"));
console.log(Trybe(5));
console.log(Trybe(false)); */

function excluiCliente (cliente) {
    if(typeof cliente === "string"){
        clientesTrybeBank.pop(cliente);
        return "Cliente excluido !!";
    }else{
        return "Erro! ("+cliente+") Não é do tipo string !!"
    }
};
console.log(clientesTrybeBank)
console.log(excluiCliente("Ana"));
console.log(excluiCliente(5));
console.log(excluiCliente(false));