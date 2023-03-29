function calculaPrecoSaldo(preço: number): string {
    let precosaldo: string ;
    let desconto: number = 0;

    if (preço > 200) {
        desconto = 60;
    }
    else if (preço > 100 && preço <= 200) {
        desconto = 40;
    }
    else if (preço > 50 && preço <= 100) {
        desconto = 30;
    }
    else if (preço <= 50) {
        desconto = 20;
    }

    let precoSaldo = desconto + "%";

    return precoSaldo;
}

let precosaldo = calculaPrecoSaldo(45);
console.log("desconto de " + precosaldo);