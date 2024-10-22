function nasa(num) {
    let res = "1";
    for (let i = 2 ; i <= num ; i ++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res += " NASA"
        } else if (i % 3 === 0) {
            res += " NA"
        } else if (i % 5 === 0) {
            res += " SA"
        } else {
            res += " " + i
        }
    }
    return res
}
