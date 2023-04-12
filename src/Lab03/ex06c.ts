/**
 * The function will return a number of multiples of 3 and 5 in a given interval
 * @param start the start of the range
 *@param end the end of the range
 */

import { ensurePositive, ensureInteger, ensureStartLessThanEnd } from "./functions";

export function multiplesOfThreeAndFive(start: number, end: number): number {
   
    let res = 0;
    let x: number;
    for (x = start; x <= end; x++){
        if (x % 3 == 0 || x % 5 == 0){
            res++;
        }
    }
    return res;
}