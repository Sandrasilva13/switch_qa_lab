function calculaCalculoExpressao (x:number, y:number,): number  {

let expressao = (x * x) - (3*x) +1;

return expressao;

}

let x: number = 10;
let y: number = 0;
let expressao: number = 0;

expressao = calculaCalculoExpressao (x,y);

console.log ("valor expressao =" + expressao)