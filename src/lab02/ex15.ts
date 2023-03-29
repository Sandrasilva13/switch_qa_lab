function calculaCustoJardinagem(quantidadeGrama: number, quantidadeArvore: number, quantidadeArbustos: number): number {

// calcular custo * quantidade
    let cgrama: number = 10 * quantidadeGrama;
    let uniArvores: number = 20 * quantidadeArvore;
    let uniArbustos: number = 15 * quantidadeArbustos;

 // calcular tempo estimado = segundos * quantidade || ( calcular o valor total da hora de trabalho: segundos -> hora * valor hora)
    let segundosGrama: number = 300 * quantidadeGrama;
    let segundosArvore: number = 600 * quantidadeArvore;
    let segundosArbusto: number = 400 * quantidadeArbustos;

// calcular Hora trabalhada 
    let horagrama: number = segundosGrama / 3600;
    let horaarvore: number = segundosArvore / 3600;
    let horaarbusto: number = segundosArbusto / 3600;

    let horaTrabalho: number = (horagrama + horaarvore + horaarbusto) * 10;

//retorna o custo total da jardinagem: valor total de horas + o custo * quantidade de cada produto
    let valorTotal: number = horaTrabalho + cgrama + uniArvores + uniArbustos; 

    return valorTotal;
}

let quantidadeGrama: number = 7;
let quantidadeArvore: number = 13;
let quantidadeArbustos: number = 20;

let custoValorTotalServiço: number = 0;

custoValorTotalServiço = calculaCustoJardinagem (quantidadeGrama,quantidadeArvore,quantidadeArbustos)
console.log ("custo de jardinagem =" + custoValorTotalServiço);