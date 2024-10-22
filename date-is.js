function isValid(date) {
    if (date instanceof Date && !isNaN(date)) {
        return true
    } else if (typeof date === "number" && !isNaN(date)) {
        return true
    }
    return false
}

function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 > date2;
}
function isBefore(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 < date2;
}
function isPast(date) {
    return isValid(date) && date < new Date();
}
function isFuture(date) {
    return isValid(date) && date > new Date();
}


// console.log(isValid(Date.now()));
// console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11)));
// const result = new Date(1989, 6, 10)
// console.log(result.getFullYear());