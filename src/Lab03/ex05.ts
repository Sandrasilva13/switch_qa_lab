/**
 * function will take a gross salary, and return the net salary, based on the following rules:
 * for a sum until 500, the tax is 10%
 * for a sum between 500 and 1000, the tax is 15%
 * for a sum above 1000 the tax is 20%
 * @param grossSalary
 * @returns netSalary
 * @throws if grossSalary is negative
 * @throws if grossSalary is not a number
 */

import { ensurePositive } from "./functions";
export function netSalary(grossSalary: number): number {
    ensurePositive(grossSalary);
    let netSalary: number;
    if (grossSalary < 500) {
        netSalary = grossSalary * 0.9;
    }
    else if (grossSalary <= 1000) {
        netSalary = grossSalary * 0.85;
    }
    else {
        netSalary = grossSalary * 0.8;
    }
    return Math.floor(netSalary);
}