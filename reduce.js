function fold(arr, func, acc = 0) {
    let result = acc;
    for (let i = 0; i < arr.length; i++) {
        result = func(result, arr[i]);
    }
    return result;
}
function foldRight(arr, func, acc = 0) {
    let result = acc;
    for (let i = arr.length - 1; i >= 0; i--) {
        result = func(result, arr[i]);
    }
    return result;
}

function reduce(arr, func, acc = arr[0]) {
    let result = acc;
    for (let i = 1; i < arr.length; i++) {
        result = func(result, arr[i]);
    }
    return result;
}
function reduceRight(arr, func, acc = arr[arr.length - 1]) {
    let result = acc;
    for (let i = arr.length - 2; i >= 0; i--) {
        result = func(result, arr[i]);
    }
    return result;
}
