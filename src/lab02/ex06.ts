function calculeValores(x: number): number {
    let result: number = 0;

    if (x < 0) {
        result = x;
    }
    else if (x = 0) {
        result = 0;
    }

    else if (x > 0) {
        result = x * 2 - 2 * x;

    }
    return result;

}