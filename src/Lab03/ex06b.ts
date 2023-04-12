/**
The function will return the number of multiples of a given integer in a given range
* @param start the start of the range
* @param end the end of the range
*/

import { ensurePositive, ensureInteger, ensureStartLessThanEnd } from "./functions";

export function multiplesOfAnInteger(start: number, end: number, number: number): number {

    let res = 0;
    let x: number;
    for (x = start; x <= end; x++) {
        if (x % number == 0) {
            res++;
        }
    }
    return res;
}

