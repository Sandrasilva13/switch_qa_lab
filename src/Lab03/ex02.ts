/* Dolar = 1,534 
 Libra = 0,774 
 Iene = 161,480
 Coroa Sueca = 9,593
 Franco Suíço = 1,601
 */

export function calcularCambio(valor: number, cambio: string): number {

    let dolar: number = 0;
    let libra: number = 0;
    let iene: number = 0;
    let coroaSueca: number = 0;
    let francoSuico: number = 0;

    let resultado: number = 0;

    if (dolar== 0 && libra == 0 && iene == 0 && coroaSueca == 0 && francoSuico == 0) {
        throw new Error('Invalid Number');
    }

    if (cambio == "D") {
        resultado = valor * 1.534;
    }
    else if (cambio == "L") {
        resultado = valor * 0.774;
    }
    else if (cambio == "I") {
        resultado = valor * 161.480;
    }
    else if (cambio == "CS") {
        resultado = valor * 9.593;
    }
    else if (cambio == "FS") {
        resultado = valor * 1.601;
    }

    return Math.trunc(resultado);
}