function letterSpaceNumber(str) {
    const regex = /\w{1} \d{1}(?!\w)/g;
    let res = str.match(regex)
    if (res === null) {
        return []
    }
    return res
}
