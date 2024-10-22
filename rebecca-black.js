function isFriday(date) {

    if (date.getDay() === 5) {
        return true
    }
    return false
}

function isWeekend(date) {
    if (date.getDay() === 6) {
        return true
    }
    return false
}

function isLeapYear(date) {
    if (date.getFullYear() % 4 === 0) {
        return true
    }
    return false
}

function isLastDayOfMonth(date) {
    let nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    if (nextDay.getMonth() !== date.getMonth()) {
        return true
    }
    return false
}
