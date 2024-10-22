function debounce(func, timeout = 0) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };
}

function opDebounce(func, wait, options = {}) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    if (options.leading) {
      func(...args);
      options.leading = false
    }
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
