function calculaDistanciaOperarios(caboA:number, caboB:number, anguloC:number): number  {
let distanciaOperarios = Math.sqrt (caboA^2) + (caboB^2) -2 *(caboA * caboB) * Math.cos(anguloC);

return distanciaOperarios;
}

let caboA:number = 40;
let caboB:number = 60;
let anguloC:number = 60;
let distanciaOperarios: number =0;

distanciaOperarios = calculaDistanciaOperarios (caboA, caboB, anguloC);

console.log ("distancia operarios =" + distanciaOperarios); 