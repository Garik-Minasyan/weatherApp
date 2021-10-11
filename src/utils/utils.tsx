export const fToC = (fahrenheit: number) => {
    const cTemp = fahrenheit;
    const cToFahr = cTemp * 9 / 5 + 32;
    return Math.ceil(Number(cToFahr))
}

export const filterDate = (arrayHours: []) => {
    return arrayHours.filter((item: any) => {
        const currentDate = new Date().getDate();
        return item.date.getDate() === currentDate;
    });
}

export const filterDaily = (arrayHours: []) => {
    let arr: never[] = []
    for (let i = 1; i <= arrayHours.length - 3; i++) {
        arr.push(arrayHours[i])
    }
    return arr
}

export const getDateFromSeconds = (sec: number, offset: number) => {
    const date = new Date(1970, 0, 1);
    date.setSeconds(sec + offset);
    return date;
};
