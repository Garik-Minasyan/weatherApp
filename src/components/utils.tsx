export function fToC(fahrenheit: number) {
    const cTemp = fahrenheit;
    const cToFahr = cTemp * 9 / 5 + 32;
    return Math.ceil(Number(cToFahr))
}

export function filterHours(arrayHours: []) {
    let arr: never[] = []
    for (let i = 1; i <= arrayHours.length / 2; i++) {
        arr.push(arrayHours[i])
    }
    return arr
}

export function filterDaily(arrayHours: []) {
    let arr: never[] = []
    for (let i = 1; i <= arrayHours.length - 3; i++) {
        arr.push(arrayHours[i])
    }
    return arr
}

export function msToTime(duration: number) {
    let hours: number | string = Math.floor((duration / (1000 * 60 * 60 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    return hours
}

export function toDays(duration: number) {
    let days: number | string = Math.floor((duration / (1000 * 60 * 60 * 24)));
    days = (days < 10) ? "0" + days : days;
    return days
}



