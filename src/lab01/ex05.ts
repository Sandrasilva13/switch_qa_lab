function calculaHipotenusa(C1: number, C2: number, H: number): number {

    let hipotenusa: number;
    hipotenusa = (C1 * 2 + C2 * 2) + H;
    return hipotenusa;

}

export { calculaHipotenusa };

let C1: number = 6;
let C2: number = 10;
let H: number = 0;

H = calculaHipotenusa(C1, C2, H);

console.log("hipotenusa=" + H);