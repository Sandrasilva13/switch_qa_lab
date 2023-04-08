function calculoSalarioSemanal(horasTrabalho: number): string {

    let resultado: string = "";
    let calculoSalario: number;
    let contadorNormal: number = 0;
    let contadorExtraPrimeiro: number = 0;
    let contadorExtraRestantes: number = 0;

    let salarioHoraNormal: number = 7.5;
    let salarioHoraExtra5: number = 10;
    let salarioHoraExtra: number = 15;


    // faz um ciclo ate percorrer todas horas de trabalho
    while (horasTrabalho > 0) {

        // as primeiras 36 horas sao de calculo normal
        if (contadorNormal < 36) {
            contadorNormal = contadorNormal + 1;
        }

        // a seguir conta so as 5 seguintes apos hora normal
        else if (contadorExtraPrimeiro < 5) {
            contadorExtraPrimeiro = contadorExtraPrimeiro + 1;
        }

        // por fim as restantes
        else {
            contadorExtraRestantes = contadorExtraRestantes + 1;
        }

        horasTrabalho = horasTrabalho - 1;
    }

    calculoSalario = (contadorNormal * salarioHoraNormal) + (contadorExtraPrimeiro * salarioHoraExtra5) + (contadorExtraRestantes * salarioHoraExtra);
    console.log(calculoSalario);

    resultado = "€ " + calculoSalario;
    return resultado;

}

let a = calculoSalarioSemanal(36);
let b = calculoSalarioSemanal(41);
let c = calculoSalarioSemanal(50);