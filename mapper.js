function map(arr, func) {
    const soufian = [];
    for (let index = 0; index < arr.length; index++) {
        soufian.push(func(arr[index], index , arr))
    }
    return soufian
}
function flatMap(array, func) {
    const soufian = [];
    for (let i = 0; i < array.length; i++) {
      const mappedValue = func(array[i], i, array);
      if (Array.isArray(mappedValue)) {
        soufian.push(...mappedValue);
      } else {
        soufian.push(mappedValue);
      }
    }
    return soufian;
  }
  