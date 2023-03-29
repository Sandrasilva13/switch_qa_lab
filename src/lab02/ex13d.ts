function calculaLimitesValidacao(aprovado: number, limiteMa: number, limiteFraca: number, limiteRazoavel: number, limiteBoa: number): string {
    let resultado: string = ""; 

    if (aprovado < 0 || aprovado > 1) {
        resultado = "Valor Inválido";
    }
    else if (aprovado < limiteMa) {
        resultado = "Turma Má";
    }
    else if (aprovado >= limiteMa && aprovado < limiteFraca) {
        resultado = "Turma Fraca";
    }
    else if (aprovado >= limiteFraca && aprovado < limiteRazoavel) {
        resultado = "Turma Razoável";
    }
    else if (aprovado >= limiteRazoavel && aprovado < limiteBoa) {
        resultado = "Turma Boa";
    }
    else { resultado = "Turma Excelente";}

    return resultado;

}


