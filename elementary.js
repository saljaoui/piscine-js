function multiply(a, b) {
    let isNegative = false;
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    } else if (a < 0) {
        a = -a
        isNegative = true
    } else if (b < 0) {
        b = -b
        isNegative = true
    }

    let res = 0;
    for (let i = 1; i <= b; i++) {
        res += a
    }
    if (isNegative) {
        return -res
    }
    return res;
};

function divide(a, b) {
    let count = 0;
    if (b === 0) {
        return
    }
    let isNegative = false;
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    } else if (a < 0) {
        a = -a
        isNegative = true
    } else if (b < 0) {
        b = -b
        isNegative = true
    }

    while (a >= b) {
        a -= b
        count++;
    };
    if (isNegative) {
        return -count
    }
    return count;
};

function modulo(a, b) {
    if (b === 0) {
        return
    }
    let isNegative = false;
    if (a < 0 && b < 0) {
        a = -a
        b = -b
        isNegative = true
    } else if (a < 0) {
        a = -a
        isNegative = true
    } else if (b < 0) {
        b = -b
    }
    if (a < b) {
        if (isNegative) {
            return -a
        }
        return a
    }
    while (a >= b) {
        a -= b
    };
    if (isNegative) {
        return -a
    }
    return a
};
