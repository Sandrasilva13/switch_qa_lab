export function qualAlgoritmo (number: number): number{

    let res = 1;
    let x: number;
    for (x = number; x > 1; x--){
        res = res * x;
    }

    return res;
}




