export function convertToF(celsius: number) {
    let fahrenheit = celsius * 9 / 5 + 32
    return Math.ceil(Number(fahrenheit));
}
