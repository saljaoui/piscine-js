function longWords(arr) {
    return arr.every((soufian) => soufian.length >= 5)
}

function oneLongWord(arr) {
    return arr.some((soufian) => soufian.length >= 10)
}

function noLongWords(arr) {
   return arr.every((soufian) => soufian.length < 7)
}