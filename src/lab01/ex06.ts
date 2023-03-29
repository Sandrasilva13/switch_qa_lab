function calculaTemperatura(celsius: number, fahrenheit: number): number {

    let grausFahrenheit = 32 + (9/5) * celsius;

    return grausFahrenheit
}

let celsius: number = 32;
let fahrenheit: number = 0;
let grausFahrenheit: number = 0;

grausFahrenheit=calculaTemperatura(celsius, fahrenheit);

console.log("grausFahrenheit =" + grausFahrenheit)
