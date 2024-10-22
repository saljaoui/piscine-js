function filterKeys(nutrients, condition) {
    let res = {}
    for (const key in nutrients) {
        if (condition(key)) {
            res[key] = nutrients[key]
        }
    }
    return res
}

function mapKeys(nutrients, condition) {
    let res = {}
    for (const key in nutrients) {
        res[condition(key)] = nutrients[key]
    }
    return res
}

function reduceKeys(nutrients, condition, acc = "") {
    let str = acc;
    let len = condition("" , "").length
    for (const key in nutrients) {
      str = condition(str, key);
    }
    if (acc === "") {
        return str.slice(len)
    }
    return str;
}

