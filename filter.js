function filter(arr, func) {
    const soufian = [];
    for (let index = 0; index < arr.length; index++) {
        if (func(arr[index], index, arr)) {
            soufian.push(arr[index])
        }
    }
    return soufian
}

function reject(arr, func) {
    const soufian = [];
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            soufian.push(arr[i]);
        }
    }
    return soufian;
}

function partition(arr, func) {
    const truthy = [];
    const falsy = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            truthy.push(arr[i]);
        } else {
            falsy.push(arr[i]);
        }
    }
    return [truthy, falsy];
}