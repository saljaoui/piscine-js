function chunk(arr, size) {
    let res = [];
    for (let i = 0; i < arr.length; i += size) {
        const subArr = arr.slice(i, i + size)
        res.push(subArr)
    }
    return res
}