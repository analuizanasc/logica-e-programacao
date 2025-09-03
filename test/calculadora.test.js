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
});
