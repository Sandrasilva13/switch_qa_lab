function calculaVolumeCubo(area: number): number {
   // let volume: number = -1 (elimina a linha 12)

    let aresta: number;
    let volume: number;

    if (area > 0) {
        aresta = Math.sqrt(area / 6);
        volume = Math.pow(aresta, 3);
    }
    else {
        volume = -1
    }
    return volume;
}



function calculaClassificacaoVolume(area: number): string {
    let volume: number = calculaVolumeCubo(area);
    let classificacao: string;

    if (volume <= 1) {
        classificacao = "pequeno";
    }
    else if (volume > 1 && volume <= 2) {
        classificacao = "medio";
    }
    else {
        classificacao = "grande";
    }

    return classificacao;

}
