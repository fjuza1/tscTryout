function getDayInMonth(year = new Date().getFullYear(), month) {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                day = 29; // Leap year
            } else {
                day = 28; // Non-leap year
            } 
            break;
    }
    return day;
}
console.log(getDayInMonth(2020,2)); // 29
console.log(getDayInMonth(2021,2)); // 28 (non-leap year)