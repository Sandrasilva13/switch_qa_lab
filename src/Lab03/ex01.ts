/*
Function will retun an algorithm of a given number
*/

import { ensureInteger, ensurePositive } from "./functions";

export function whichAlgorithm (number: number): number{

    ensurePositive(number);
    ensureInteger(number);
    let res = 1;
    let x: number;
    for (x = number; x > 1; x--){
        res *= x;
    }

    return res;
}

