function matchCron(str, date) {
    let arrayStr = str.split(" ")
    if (arrayStr[0] !== '*' && Number(arrayStr[0]) !== date.getMinutes()) {
        return false
    } else if (arrayStr[1] !== '*' && Number(arrayStr[1]) !== date.getHours()) {
        return false
    } else if (arrayStr[2] !== '*' && Number(arrayStr[2]) !== date.getDate()) {
        return false
    } else if (arrayStr[3] !== '*' && Number(arrayStr[3]) !== date.getMonth() + 1) {
        return false
    } if (arrayStr[4] !== '*' && Number(arrayStr[4]) !== date.getDay() ) {
        return false
    } else {
        return true
    }
}