function calculaDistanciaPercorrida(velocidademedia:number, tempo: number): number {

let distanciapercorrida: number = 0;
distanciapercorrida = (tempo*velocidademedia);
return distanciapercorrida;

}

//calculo de Velocidade Média do Manel
let distanciaManel: number=42195; //distância em metros
let horasManel: number=4;
let minutosManel: number=2;
let segundosManel: number = 10;

let tempoManel = (horasManel*3600) + (minutosManel*60) + segundosManel; //tempo total em segundos
let velocidademedia = (distanciaManel/tempoManel) //Velocidade média dos corredores

//Calculo tempo Ze em segundos
let horasZe: number=1;
let minutosZe: number=5;
let tempoZe = (horasZe*3600) + (minutosZe*60); //tempo total em segundos


//let tempoManel: number = 14530;
//let tempoZe: number = 3900; 

//calculo distancia Ze
let distanciaze: number = 0;
distanciaze = calculaDistanciaPercorrida (velocidademedia, tempoZe);
console.log ("Ze percorreu =" + distanciaze)

