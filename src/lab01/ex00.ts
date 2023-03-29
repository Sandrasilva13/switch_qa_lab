console.log("Ola Mundo");

import { calculaPercentagemRapazes, calculaPercentagemRaparigas } from './ex01'


let rapazes: number = 10;
    let raparigas: number = 20;
        let percentagemDeRapazes: number=0.0;
            let percentagemDeRaparigas: number= 0.0;
                percentagemDeRapazes=calculaPercentagemRapazes(rapazes,raparigas);
                    percentagemDeRaparigas=calculaPercentagemRaparigas(rapazes, raparigas);

console.log("percentagem de rapazes=" + percentagemDeRapazes);
console.log("percentagem de raparigas =" + percentagemDeRaparigas);



import { calculaPrecoTotal } from './ex02'


let rosas: number = 5;
    let tulipas: number = 7;
        let precoRosas: number= 2.30;
            let precoTulipas: number= 1.70;
                let precoTotalRosas: number= calculaPrecoTotal (rosas,precoRosas);
                    let precoTotalTulipas: number= calculaPrecoTotal (tulipas,precoTulipas);
                        let precoTotal: number = precoTotalRosas+precoTotalTulipas;

console.log("preco total=" + precoTotal);


import { calculaVolumeCilindro } from './ex03'


let raio: number = 20;
    let altura: number = 10;
        let Pi: number = 3.14;
            let volumeCilindro: number = 0;

volumeCilindro=calculaVolumeCilindro(raio,altura,Pi);

console.log("volumecilindro=" + volumeCilindro);


import { calculaPerimetroRetangulo } from './ex04'


let ladoA: number = 5;
    let ladoB: number = 10;
        let perimetroRetangulo: number = 0;

perimetroRetangulo=calculaPerimetroRetangulo(ladoA,ladoB);

console.log ("calculaPerimetroRetangulo="+ perimetroRetangulo);
