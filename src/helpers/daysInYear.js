const isLeapYear = (year) => {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

export default (year) => {
    return isLeapYear(year) ? 366 : 365;
}