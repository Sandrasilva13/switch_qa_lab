function calculaHoraFimProcessamento(horaInicio: number, minutosInicio: number, segundosInicio: number, tempoProcessamento: number): [number, number, number] {

    let resultado : [number, number, number];
    let tempoProcessamentoHoras : number;
    let tempoProcessamentoMinutos : number;
    let tempoProcessamentoSegundos : number;
    let aux : number ;
    let tempoTotalHoras : number;
    let tempoTotalMinutos : number;
    let tempoTotalSegundos : number;

    // o tempo de processamento da tarefa vem em segundos, vamos transformar em horas, minutos e segundos
    
    // dividimos por 3600 porque é o numero de segundos numa hora, e Math.trunc para ficarmos só com a 
    // parte inteira.
    tempoProcessamentoHoras = Math.trunc(tempoProcessamento / 3600);
    

    // aqui guardamos o resto, que neste caso agora são os minutos
    aux = tempoProcessamento % 3600;


    // dividimos por 60 porque é o numero de segundos num minuto e ficamos com os minutos
    tempoProcessamentoMinutos = Math.trunc(aux / 60);


    //o que resta são segundos
    tempoProcessamentoSegundos = aux % 60;

    tempoTotalHoras = horaInicio + tempoProcessamentoHoras;
    tempoTotalMinutos = minutosInicio + tempoProcessamentoMinutos;
    tempoTotalSegundos = segundosInicio + tempoProcessamentoSegundos;


    resultado = [horaInicio + tempoProcessamentoHoras, minutosInicio + tempoProcessamentoMinutos, segundosInicio + tempoProcessamentoSegundos];
    console.log( "A tarefa iniciou ás: " + horaInicio + ":" + minutosInicio + ":" + segundosInicio + " e terminou ás " + tempoTotalHoras + ":" + tempoTotalMinutos + ":" + tempoTotalSegundos );

    return resultado;
}

let calccula = calculaHoraFimProcessamento(14, 10, 11, 20000);
