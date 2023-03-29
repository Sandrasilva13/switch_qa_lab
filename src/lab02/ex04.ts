function operadoresDivisao(numero: number, digito1: number, digito2: number, digito3: number): number {

    if (numero < 100 || numero > 999) {
        digito1 = -1;
    }

    else {
        digito3 = numero % 10;
        digito2 = (numero / 10) % 10;
        digito1 = (numero / 100) % 10;
    }

    return digito1;

}