function calculaMinutos(hora: number, minutos: number): number {

    let mtotal: number = 0;
    mtotal = (hora * 60) + minutos;

    return mtotal;
}

let hora: number = 4;
let minutos: number = 15;

minutos = calculaMinutos(hora, minutos);

console.log("minutos=" + minutos); 


//Testes:
// (-15, -20);
//(15, -20);
//(-15, 20)
//(0,0);
//(0,25);
//(1, 25);
//

