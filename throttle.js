function throttle(func, timeout) {
  let wait = false
  return (...args) => {
    if (wait) return
    func(...args)
    wait = true
    setTimeout(() => (wait = false), timeout);
  }
}

function opThrottle(func, timeout, options = {}) {
  let wait = false
  return (...args) => {
    if (wait) return
    wait = true
    if (options?.leading) {
      func(...args)
    }
    setTimeout(() => {
      if (options?.trailing && !options?.leading) {
        func(...args)
      }
      wait = false
    }, timeout)
  }
}
