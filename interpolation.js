function interpolation(options = {}) {
  let x = options.start
  let y = 0
  let i = 0
  let addX = (options.end - options.start) / options.step
  let addY = options.duration / options.step

  setInterval(() => {
    if (i === options.step) {
      return
    }
    y += addY
    options.callback([x, y])
    x += addX
    i++
  }, options.duration / options.step);
}
