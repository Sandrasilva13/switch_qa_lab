function calculaAlturaEdificioTales (alturaPessoa:number, sombraPessoa:number, sombraEdificio:number ): number  {
let alturaEdificio = alturaPessoa * (sombraEdificio/sombraPessoa);

return alturaEdificio;

}

let alturaPessoa: number = 2;
let sombraEdificio: number = 40;
let sombraPessoa: number = 4;
let alturaEdificio: number =0;

alturaEdificio = calculaAlturaEdificioTales (alturaPessoa, sombraPessoa, sombraEdificio);


console.log ( "altura edificio ="+ alturaEdificio);