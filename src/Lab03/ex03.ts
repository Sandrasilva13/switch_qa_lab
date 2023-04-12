/*
Code + Classification:
1 Alimento não perecível (non-perishable food)
2 a 4 Alimento perecível (perishable food)
5 a 6 Vestuário (clothing)
7 Higiene pessoal (personal hygiene)
8 a 15 Limpeza e utensílios domésticos (cleaning and household utensils)
Qualquer Outro (<>0) Código Inválido (invalid code)
*/

export function descricaoProduto(codigoProduto: number): string {

    let classificacao: string;

    if (codigoProduto == 1) {
        classificacao = "Alimento não perecível";
    }

    else if (codigoProduto >= 2 && codigoProduto <= 4) {
        classificacao = "Alimento perecível";
    }
    else if (codigoProduto >= 5 && codigoProduto <= 6) {
        classificacao = "Vestuário";
    }
    else if (codigoProduto == 7) {
        classificacao = "Higiene pessoal";
    }
    else if (codigoProduto >= 8 && codigoProduto <= 15) {
        classificacao = "Limpeza e utensílios domésticos";
    }
    else {
        classificacao = "Código Inválido";
    }
    return classificacao;
}

