const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da função Soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function () {
        // coleta o resultado 
        const resultadoSoma = somarDoisNumeros(5, 10);
        // compara o resultado 
        expect(resultadoSoma).to.equal(15);
    });

    it('A função deve ser capaz de somar um número positivo e negativo', function () {
        // coleta o resultado 
        const resultadoSoma = somarDoisNumeros(5, -10);
        // compara o resultado 
        expect(resultadoSoma).to.equal(-5);
    });

    it('A função deve ser capaz de somar dois números negativos', function () {
        // coleta o resultado 
        const resultadoSoma = somarDoisNumeros(-5, -10);
        // compara o resultado 
        expect(resultadoSoma).to.equal(-15);
    });

    it('A função deve ser capaz de somar zeros', function () {
        // coleta o resultado 
        const resultadoSoma = somarDoisNumeros(0, 0);
        // compara o resultado 
        expect(resultadoSoma).to.equal(0);
    });
});

describe('Testes da função de Subtração', function () {
    it('A função deve ser capaz de subtrair valor 1 maior que valor 2', function () {
        // coleta o resultado 
        const resultado = subtrairDoisNumeros(10, 5);
        // compara o resultado 
        expect(resultado).to.equal(5);
    });
    it('A função deve ser capaz de subtrair valor 1 menor que valor 2', function () {
        // coleta o resultado 
        const resultado = subtrairDoisNumeros(5, 15);
        // compara o resultado 
        expect(resultado).to.equal(-10);
    });
    it('A função deve ser capaz de subtrair dois numeros negativos', function () {
        // coleta o resultado 
        const resultado = subtrairDoisNumeros(-5, -15);
        // compara o resultado 
        expect(resultado).to.equal(-20);
    });
});


describe('Testes da função de Multiplicação', function () {
    it('A função deve ser capaz de multiplicar 2 números positivos', function () {
        // coleta o resultado 
        const resultado = multiplicarDoisNumeros(10, 5);
        // compara o resultado 
        expect(resultado).to.equal(50);
    });
    it('A função deve ser capaz de multiplicar 2 números negativos', function () {
        // coleta o resultado 
        const resultado = multiplicarDoisNumeros(-5, -1);
        // compara o resultado 
        expect(resultado).to.equal(5);
    });
    it('A função deve ser capaz de multiplicar por 1 número positivo e 1 número negativo', function () {
        // coleta o resultado 
        const resultado = multiplicarDoisNumeros(-5, 1);
        // compara o resultado 
        expect(resultado).to.equal(-5);
    });
    it('A função deve ser capaz de multiplicar por 1 número por zero ', function () {
        // coleta o resultado 
        const resultado = multiplicarDoisNumeros(5, 0);
        // compara o resultado 
        expect(resultado).to.equal(0);
    });
});

describe('Testes da função de Divisão', function () {
    it('A função deve ser capaz de dividir 2 números, valor 01 maior que valor 02', function () {
        // coleta o resultado 
        const resultado = dividirDoisNumeros(10, 5);
        // compara o resultado 
        expect(resultado).to.equal(2);
    });
    it('A função deve ser capaz de dividir 2 números, valor 01 menor que valor 02', function () {
        // coleta o resultado 
        const resultado = dividirDoisNumeros(5, 10);
        // compara o resultado 
        expect(resultado).to.equal(0.5);
    });
    it('A função deve ser capaz de dividir um número por outro negativo', function () {
        // coleta o resultado 
        const resultado = dividirDoisNumeros(-5, 1);
        // compara o resultado 
        expect(resultado).to.equal(-5);
    });
    it('A função deve ser capaz de dividir 1 número por zero ', function () {
        // coleta o resultado 
        const resultado = dividirDoisNumeros(5, 0);
        // compara o resultado 
        expect(resultado).to.equal(1);
    });
});