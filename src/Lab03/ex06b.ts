/**
The function will return the number of multiples of a given integer in a given range
* @param start the start of the range
* @param end the end of the range
* @returns the number of multiples of a given integer
*/

import { ensurePositive, ensureInteger, ensureStartLessThanEnd } from "./functions";

export function multiplesOfAnInteger(start: number, end: number, number: number): number {

    let count: number = 0;
      for (let i = start; i <= end; i++) {
        if (i % number == 0) {
            count++;
        }
    }
    return count;
}

