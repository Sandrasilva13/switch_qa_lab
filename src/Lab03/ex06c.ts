/**
 * The function will return a number of multiples of 3 and 5 in a given interval
 * @param start the start of the range
 *@param end the end of the range
 */

import { ensurePositive, ensureInteger, ensureStartLessThanEnd } from "./functions";

export function multiplesOfThreeAndFive(start: number, end: number): number {
   
    let count: number = 0;
      for (let i = start; i <= end; i++){
        if (i % 3 == 0 && i % 5 == 0){
            count++;
        }
    }
    return count;
}