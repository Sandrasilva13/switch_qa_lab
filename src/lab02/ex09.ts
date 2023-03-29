export function calculaSaudacao(segundosEntrada: number): string {
    let horas: number;
    let minutos: number;
    let seconds: number;
    let resultado: string;
    let aux: number;


    horas = Math.trunc(segundosEntrada / 3600);
    aux = segundosEntrada % 3600;
    minutos = Math.trunc(aux / 60);
    seconds = aux % 60;

    resultado = horas + ":" + minutos + ":" + seconds;

    let bomDiaInicio: number;
    let bomDiaFim: number;
    let boaTardeInicio: number;
    let boaTardeFim: number;
    let boaNoiteInicio: number;
    let boaNoiteFim: number;
    let saudacao: string = "";

    bomDiaInicio = 6 * 3600;
    bomDiaFim = 12 * 3600 + 1;

    boaTardeInicio = 12 * 3600 + 1;
    boaTardeFim = 20 * 3600 + 1;

    boaNoiteInicio = 20 * 3600 + 1;
    boaNoiteFim = 6 * 3600;

  
    if (segundosEntrada >= bomDiaInicio && segundosEntrada < bomDiaFim) {
        saudacao = "Bom Dia";
    }
    else if (segundosEntrada >=boaTardeInicio && segundosEntrada < boaTardeFim){
        saudacao = "Boa Tarde";
    }
    else if (segundosEntrada >=boaNoiteInicio || segundosEntrada < boaNoiteFim ){
        saudacao = "Boa Noite";
    }

    return saudacao;
}

let calcular = calculaSaudacao (39600)

console.log ("calcula =" + calcular);

console.log(calculaSaudacao (200));
