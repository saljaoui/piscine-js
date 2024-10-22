function slice(arrOrStr, start = 0, end = arrOrStr.length) {
    let res = [];
    let len = arrOrStr.length;

    if (start < 0) {
        start += len
        if (start < 0) {
            start = 0
        }
    }

    if (end < 0) {
        end = len + end
    }

    for (let i = start; i < end; i++) {
        res.push(arrOrStr[i])
    }

    if (typeof arrOrStr === "string") {
        return res.join('')
    }

    return res
}
