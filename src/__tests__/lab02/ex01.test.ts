import { calculaMediaPesada } from '../../lab02/ex01';

describe('calculo media pesada', () => {
    test('teste', () => {
        //Arrange
        let peso1: number = 5;
        let peso2: number = 5;
        let peso3: number = 5;
        let nota1: number = 10;
        let nota2: number = 10;
        let nota3: number = 10;
        let expectedMediaPesada: number = 10;


        //Act
        let mediaPesada = calculaMediaPesada(nota1, nota2, nota3, peso1, peso2, peso3);

        //Assert
        expect(mediaPesada).toBe(expectedMediaPesada);

    });

});

