const checkBalidRange = (number) => {
    if (number > 1 || number < 10 ) {
        throw new error('É necessário digitar um número entre 1 e 10');
    }
}

const validarNumber = (n1, n2, n3, n4) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number' ) {
        throw new Error('Todos os parametros precisão ser numeros');
    }
}

const calculoMedia = (n1, n2, n3, n4) => {
    const media = n1 + n2 + n3 + n4;
    const resultado = media / 4;
    return resultado;
}

const resultadoMedia = (n1, n2, n3, n4) => {
    try {
        validarNumber(n1, n2, n3, n4);
        return calculoMedia(n1, n2, n3, n4);
    } catch (Error) {
        return Error.message;
    }
}

console.log(resultadoMedia(5, 6, 7, '8'));