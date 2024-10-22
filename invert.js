function invert(obj) {
    let invObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            invObj[obj[key]] = key;
        }
    }
    return invObj;
}