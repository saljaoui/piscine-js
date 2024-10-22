function every(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        if (!func(arr[index])) {
            return false
        }
    }
    return true
}

function some(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        if (func(arr[index])) {
            return true
        }
    }
    return false
}

function none(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        if (func(arr[index])) {
            return false
        }
    }
    return true
}