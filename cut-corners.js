function round(num) {

    if (num >= 0) {
        let p = parse(num);
        if (p < 0.5) {
            return num - p
        }
        return num - p + 1
    }
    if (num < 0) {
        num =-num
        let p = parse(num);
        if (p <= 0.5) {
            return -(num - p)
        }
        return -(num - p + 1)
    }

}

function parse(n) {
    let t = n
    let c = 0
    while (t > 0) {
        t /= 10
        c++
    }
    t = n
    while (c >= 0) {
        let num = Math.pow(10, c)
        while (t > num) {
            t -= num
        }
        c--
    }
    return t;
}

function ceil(num) {
    if (round(num) === num) {
        return num;
         }
    return round(num + 0.5);
}

function floor(num) {
    if (round(num) === num) {
        return num;
         }
    return round(num - 0.5);
}

function trunc(num) {
    if (num >= 0) {
        return floor(num);
    } else {
        return ceil(num);
    }
}
