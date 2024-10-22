function countLeapYears(date) {
    let count = 0;
    for (let i = 1; i < date.getFullYear(); i++) {
        if (leapYear(i)) {
            count++
        }
    }
    return count
}

function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
// console.log(countLeapYears(new Date('0001-08-09')));