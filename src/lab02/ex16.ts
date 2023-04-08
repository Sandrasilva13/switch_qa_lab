function calculoMedia(distanciaKm: number, distanciaMilhas: number, valor1: number, valor2: number, valor3: number, valor4: number, valor5: number): number {

    // distanciaMilhas: ((valor1 + valor2 + valor3 + valor4 + valor5) / 5 )* 1609)

    distanciaMilhas = (valor1 + valor2 + valor3 + valor4 + valor5) / 5;
    distanciaKm = distanciaMilhas * 1609;

    return distanciaKm;

}

let valor1: number = 1000;
let valor2: number = 1000;
let valor3: number = 2000;
let valor4: number = 2000;
let valor5: number = 2000;
let distanciaKm: number = 0;
let distanciaMilhas: number = 0;


let mediaKm = calculoMedia(distanciaKm, distanciaMilhas, valor1, valor2, valor3, valor4, valor5);

console.log("distancia média  =" + mediaKm);