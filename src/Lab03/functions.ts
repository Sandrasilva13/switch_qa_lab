
export function ensurePositive(number: number) {
    if (number < 0) {
        throw new Error("Número negativo");
    }
}

export function ensureInteger(number: number) {
    if (number % 1 != 0) {
        throw new Error("Número decimal");
    }
}

export function ensureStartLessThanEnd(start: number, end: number) {
    if (start > end) {
        throw new Error("start must be less than end");
    }
}

