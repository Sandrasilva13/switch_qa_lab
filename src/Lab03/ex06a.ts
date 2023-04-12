/**
 * function will return the number of multiples of 3, in a given range
 * @param start the start of the range
 * @param end the end of the range
 * @returns the number of multiples of 3
 * @throws if start is greater than end
 * @throws if start or end are negative
 * @throws if start or end are not integers
 */

import{ensurePositive, ensureInteger, ensureStartLessThanEnd} from "./functions";

export function numberOfMultiplesOf3InRange(start:number, end:number):number{
    ensurePositive(start);
    ensureInteger(start);
    ensureInteger(end);
    ensureStartLessThanEnd(start, end);
    let count:number = 0;
    for(let i = start; i <= end; i++){
        if(i % 3 == 0){
            count++;
        }
    }
    return count;
}