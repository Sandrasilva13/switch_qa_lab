function calculaEstruturasDecisao(aprovado: number): string {
    let resultado: string = ""; 

    if (aprovado < 0 || aprovado > 1) {
        resultado = "Valor Inválido";
    }
    else if (aprovado < 0.2) {
        resultado = "Turma Má";
    }
    else if (aprovado >= 0.2 && aprovado <0.5) {
        resultado = "Turma Fraca";
    }
    else if (aprovado >= 0.5 && aprovado < 0.7) {
        resultado = "Turma Razoável";
    }
    else if (aprovado >= 0.7 && aprovado <0.9) {
        resultado = "Turma Boa";
    }
    else { resultado = "Turma Excelente";}

    return resultado;

}

let resultado = calculaEstruturasDecisao(0.3);
console.log("MediaTurma = " + resultado);

