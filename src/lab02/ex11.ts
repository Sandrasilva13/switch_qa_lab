
function calculaDigitosCrescente(numero: number): boolean {

    let resultado: boolean = false;
    let auxiliar: number = 0;
    let primeiro: number = 0;
    let segundo: number = 0;
    let terceiro: number = 0;

//unidade
    primeiro = numero % 10;
    auxiliar = Math.trunc(numero / 10);
//dezenas
    segundo = auxiliar % 10;
    auxiliar = Math.trunc(auxiliar/ 10);
//centenas
    terceiro = auxiliar;


    if ( (primeiro < segundo) && (segundo < terceiro) ) {
        resultado = true;
    }

    return resultado;
}

let teste1 = calculaDigitosCrescente(435);
if (teste1)
    console.log("crescente" );
else
    console.log("nao crescente" );



