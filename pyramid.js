function pyramid(str, num) {
    let res = "";
    let s = 0

    for (let i = 1; i <= num; i++) {
        for (let k = 1; k <= (num * str.length) - str.length + s; k++) {
            res += " "
        }

        for (let j = 2; j <= i; j++) {
            res += str
        }

        for (let j = 1; j <= i; j++) {
            res += str
        }

        if (i !== num) {
            res += "\n"
        }
        
        s -= str.length
    }
    return res
}