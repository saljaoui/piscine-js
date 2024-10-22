function isObject(item) {
  return typeof item === "object" && item !== null && !Array.isArray(item);
}

function replica(...obj) {
  let res = {};

  for (const element of obj) {
    if (isObject(element)) {
      for (const key in element) {
        if (isObject(element[key]) && isObject(res[key])) {
          res[key] = replica(res[key], element[key]);
        } else {
          res[key] = element[key];
        }
      }
    }
  }
  return res;
}