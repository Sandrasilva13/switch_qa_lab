function calculaHoras(segundosEntrada: number): string {
    let horas: number;
    let minutos: number;
    let seconds: number;
    let resultado: string;
    let aux: number;


    horas = Math.trunc(segundosEntrada / 3600);
    aux = segundosEntrada % 3600;
    minutos = Math.trunc(aux / 60);
    seconds =aux % 60;

    resultado = horas + ":" + minutos + ":" + seconds;

    return resultado;

}

let calcula = calculaHoras(9050);

console.log("calculaHoras =" + calcula)