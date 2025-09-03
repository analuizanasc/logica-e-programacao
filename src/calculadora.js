function realizarSomaDoisCamposDaTela() {
    const campo1 = document.getElementById('campo1').value;
    const campo2 = document.getElementById('campo2').value;     
    const resultado = somarDoisNumeros(campo1 + campo2) 
}

function somarDoisNumeros(numero1, numero2) {
    const resultado = (numero1) + (numero2);
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