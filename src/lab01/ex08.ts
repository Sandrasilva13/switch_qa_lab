function calculaDistanciaTrovoada(tempoSegundos: number, vsom: number): number {

    let distanciaTrovoada = vsom * tempoSegundos;

    return distanciaTrovoada;
}

let vSom: number = 340;
let tempoSegundos: number = 3600;
let distanciaTrovoada: number = 0;

distanciaTrovoada = calculaDistanciaTrovoada(vSom, tempoSegundos);

console.log("distanciaTrovoada =" + distanciaTrovoada)