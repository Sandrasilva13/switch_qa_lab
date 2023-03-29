function calculaMultiplos(x: number, y: number): string {
    let resultado: string;

    if (x % y == 0) {
        resultado = "X é múltiplo de Y";
    }
    else if (y % x == 0) {
        resultado = "Y é múltiplo de X";
    }

    else { resultado = "X não é múltiplo nem divisor de Y" }

    return resultado;

}