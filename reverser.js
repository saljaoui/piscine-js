function reverse(arrOrStr) {
    let res = []
    for (let i = arrOrStr.length-1 ; i >= 0 ; i--) {
        res.push(arrOrStr[i])
    }
    if (typeof arrOrStr === "string") {
        return res.join('')
    }
    return res
}
