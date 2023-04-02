function calculaDistanciaDoisPontos (X1:number, Y1:number, X2:number, Y2:number): number {
    let P1: number = Math.pow (X2-X1,2);
    let P2: number = Math.pow (Y2-Y1,2);
    let distanciaDoisPontos = Math.sqrt (P1 + P2);

return distanciaDoisPontos;

}