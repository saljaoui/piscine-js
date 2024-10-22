function deepCopy(value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }
    const copy = Array.isArray(value) ? [] : {};
    if (value instanceof RegExp) {
        return value;
    }
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            copy[key] = deepCopy(value[key]);
        }
    }
    return copy;
}
console.log(deepCopy([console.log, /hello/]))