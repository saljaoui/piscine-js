function adder(arr, initialValue = 0) {
    return arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );
}

function sumOrMul(arr, initialValue = 0) {
    return arr.reduce((result, current) => {
        if (current % 2 === 0) {
            return result * current;
        } else {
            return result + current;
        }
    }, initialValue);
}

function funcExec(funcs, initialValue = 0) {
    return funcs.reduce((result, func) => func(result), initialValue);
}
