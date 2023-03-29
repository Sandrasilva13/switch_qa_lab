function calculaVolumeCilindro(raio: number, altura: number, Pi: number): number {

    let volumeCilindro: number;
    volumeCilindro = (Pi * (raio * raio)) * altura;
    return volumeCilindro;

}
export { calculaVolumeCilindro };
