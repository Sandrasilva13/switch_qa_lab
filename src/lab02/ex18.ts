//teste: comboio a chegar no msm dia e no dia seguinte


function calculaHoraComboio(horaPartida: number, minutosPartida: number, duracaoHoras: number, duracaoMinutos: number): string {

    //1440 min = 24h 

    let totalMinutosPartida: number = horaPartida * 60 + minutosPartida;
    let totalDuracaoViagem: number = duracaoHoras * 60 + duracaoMinutos;
    let totalMinutosChegada: number = totalMinutosPartida + totalDuracaoViagem;

    let horaChegada: number = Math.trunc(totalMinutosChegada / 60);
    let minutosChegada: number = totalMinutosChegada % 60;

    let texto: string = "";

    if (horaChegada >= 1440 / 60) {
        horaChegada -= 1440 / 60;
    }

    if (totalMinutosChegada < 1440) {
        texto = "Próprio Dia";
    } else if (totalMinutosChegada >= 1440) {
        texto = "No dia Seguinte";
    }

    let resultado = texto + " " + horaChegada + ":" + minutosChegada;

    return resultado
}

console.log(calculaHoraComboio(23, 0, 5, 0))