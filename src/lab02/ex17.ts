function calculaCustoPintura(areaEdificio: number, salarioPintor: number, custoLitro: number, rendimentoTinta: number): number {
    let valorDia: number = 0;
    let numeroDias: number = 0;
    let numeroPintores: number = 0;
    let valorMaoObraPintores: number = 0;
    let valorTotalTinta: number = 0;
    let litrosTinta: number = 0;

    if (areaEdificio > 0 && areaEdificio < 100) {
        numeroPintores = 1;
        valorDia = salarioPintor * numeroPintores;
        numeroDias = calculaNumeroDiasTrabalhados(areaEdificio, numeroPintores);
        valorMaoObraPintores = valorDia * numeroDias;
        litrosTinta = calculalitrosDeTinta(rendimentoTinta, areaEdificio);
        valorTotalTinta = litrosTinta * custoLitro;
    }

    else if (areaEdificio >= 100 && areaEdificio < 300) {
        numeroPintores = 2;
        valorDia = salarioPintor * numeroPintores;
        numeroDias = calculaNumeroDiasTrabalhados(areaEdificio, numeroPintores);
        valorMaoObraPintores = valorDia * numeroDias;
        litrosTinta = calculalitrosDeTinta(rendimentoTinta, areaEdificio);
        valorTotalTinta = litrosTinta * custoLitro;
    }

    else if (areaEdificio >= 300 && areaEdificio <1000) {
        numeroPintores = 3;
        valorDia = salarioPintor * numeroPintores;
        numeroDias = calculaNumeroDiasTrabalhados(areaEdificio, numeroPintores);
        valorMaoObraPintores = valorDia * numeroDias;
        litrosTinta = calculalitrosDeTinta(rendimentoTinta, areaEdificio);
        valorTotalTinta = litrosTinta * custoLitro;
    }

    else if (areaEdificio >= 1000) {
        numeroPintores = 4;
        valorDia = salarioPintor * numeroPintores;
        numeroDias = calculaNumeroDiasTrabalhados(areaEdificio, numeroPintores);
        valorMaoObraPintores = valorDia * numeroDias;
        litrosTinta = calculalitrosDeTinta(rendimentoTinta, areaEdificio);
        valorTotalTinta = litrosTinta * custoLitro;
    }

    let valorTotalServiço = valorTotalTinta + valorMaoObraPintores;

    return valorTotalServiço;

}

function calculaNumeroDiasTrabalhados(areaEdificio: number, numeroPintores: number): number {
    let numeroDias: number = 0;
    numeroDias = areaEdificio / (16 * numeroPintores);

    return numeroDias
}

function calculalitrosDeTinta(rendimentoTinta: number, areaEdificio: number): number {
    let litrosTotal: number = 0;
    litrosTotal = areaEdificio / rendimentoTinta;

    return litrosTotal
}

let areaEdificio: number = 250;
let salarioPintor: number = 10;
let custoLitro: number = 2;
let rendimentoTinta: number= 10;

let valorTotalServiço = calculaCustoPintura (areaEdificio,salarioPintor,custoLitro,rendimentoTinta);
console.log ("custo total =" + valorTotalServiço)