function calculaEmissaoNotificacao(indicepoluicao: number): string {
    let notificacao: string = "";

    if (indicepoluicao <= 0.3) {
        notificacao ="poluiçao aceitável";
    }
    else if (indicepoluicao > 0.3 && indicepoluicao <=0.4) {
        notificacao ="industrias do 1º grupo são intimidadas a suspenderem as suas atividades";
    }
    else if (indicepoluicao > 0.4 && indicepoluicao <=0.5) {
        notificacao ="industrias do 1º e 2º grupo são intimadas a suspenderem as suas atividades";
    }
    else if (indicepoluicao > 0.5) {
        notificacao ="os 3 grupos devem ser notificados a paralisarem as suas atividades";
    }
    
    return notificacao;
}

let notificacao = calculaEmissaoNotificacao (0.29);
console.log("Poluicao =" + notificacao);