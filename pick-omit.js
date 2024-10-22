function pick(obj, arr) {
    let NewObj = {};
    if (typeof arr === "string" && arr in obj) {
        NewObj[arr] = obj[arr]
    } else {
        for (const key of arr) {
            if (key in obj) {
                NewObj[key] = obj[key];
            }
        }
    }
    return NewObj;
}

function omit(obj, arr) {
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !arr.includes(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
