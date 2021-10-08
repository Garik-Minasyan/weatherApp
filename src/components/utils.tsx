export function convertToF(celsius: number) {
    let fahrenheit = celsius * 9 / 5 + 32
    return Math.ceil(Number(fahrenheit));
}

export function filterHours(arrayHours: []) {
    let arr: never[] = []
    for (let i = 1; i <= arrayHours.length / 2; i++) {
        arr.push(arrayHours[i])
    }
    return arr
}

export function msToTime(duration: number) {
    let hours: number | string = Math.floor((duration / (100 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    return hours
}



