/**
 * function will receive as parameter a grade, ranging from 0 to 20, and will return a qualitative grade according to:
 * [0, 4] Mau | [5, 9] Medíocre | [10, 13] Suficiente | [14, 17] Bom | [18, 20] Muito Bom
 * @param {number} grade
 * @returns {string} qualitative grade
 */

import { ensurePositive } from "./functions";

export function notaAvaliacao(grade: number): string {
    
    ensurePositive(grade);

    let nota: string;
    if (grade <= 4) {
        nota = "Mau";
    }
    else if (grade <= 9) {
        nota = "Medíocre";
    }
    else if (grade <= 13) {
        nota = "Suficiente";
    }
    else if (grade <= 17) {
        nota = "Bom";
    }
    else if (grade <= 20) {
        nota = "Muito Bom";
    }
    else {
        nota = "Nota inválida";
    }
    return nota;
}