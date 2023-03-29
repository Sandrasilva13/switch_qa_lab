export function calculaMediaPesada(nota1: number, nota2: number, nota3: number, peso1: number, peso2: number, peso3: number): number {

    let somaPesos = peso1 + peso2 + peso3;
    let mediaPesada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / somaPesos;

    return mediaPesada;
}

let peso1: number = 5;
let peso2: number = 5;
let peso3: number = 5;
let nota1: number = 10;
let nota2: number = 10;
let nota3: number = 10;
let mediaPesada: number = 0.0;

mediaPesada = calculaMediaPesada(nota1, nota2, nota3, peso1, peso2, peso3);

console.log("media pesada =" + mediaPesada);
