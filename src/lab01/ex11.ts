function calculaAlturaEdificio (velocidadeInicial:number, distancia:number, acelaracao: number, tempo:number): number  {
      let equacaoMovimento = (distancia= velocidadeInicial*tempo + (acelaracao * (tempo*2)/2));

    return equacaoMovimento;
}

let equacaoMovimento: number=0;
let velocidadeInicial: number = 0;
let aceleracao: number = 9.8;
let distancia: number = 0;
let tempo: number =2;

equacaoMovimento = calculaAlturaEdificio (distancia, velocidadeInicial, aceleracao, tempo); 


console.log ("altura edificio =" + equacaoMovimento);
