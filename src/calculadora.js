function somarDoisNumeros(numero1, numero2) {
    const resultado = (numero1) + (numero2);
    return resultado
}

function multiplicarDoisNumeros(numero1, numero2) {
    const resultado = (numero1) * (numero2);
    return resultado
}

function dividirDoisNumeros(numero1, numero2) {
    const resultado = (numero1) / (numero2);
    return resultado
}

function subtrairDoisNumeros(numero1, numero2) {
    const resultado = (numero1) - (numero2);
    return resultado
}

function calcularMediaDoisNumeros(numero1, numero2) {
    const resultadoDoisVaalores = somarDoisNumeros(numero1, numero2);
    const resultado = resultadoDoisVaalores / 2;
    return resultado;
}

module.exports = {
    somarDoisNumeros
};