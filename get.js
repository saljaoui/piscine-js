function get(src, path) {
    const keys = path.split(".")
    for (const key of keys) {
        if (src[key] === undefined) {
            return
        }
        src = src[key]
    }
    return src
}