/**
The function will return the number of multiples of two integers in a given range
 @param start the start of the range
 @param end the end of the range
 @returns the number of multiples of two integers
*/

import { ensurePositive, ensureInteger, ensureStartLessThanEnd } from "./functions";

export function multiplesOfTwoIntegers(start: number, end: number, number1: number, number2: number): number {

    let count: number = 0;
    for (let i = start; i <= end; i++)
    if (i % number1 == 0 && i % number2 == 0){
        count++;
    }
}
