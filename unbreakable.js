function split(str, sep = "") {
    let res = [];
    let resStr = "";
    if (sep === "") {
        for (let i = 0; i < str.length; i++) {
            res.push(str[i]);
        }
        return res;
    }

    for (let i = 0; i < str.length; i++) {
        let ok = false;
        if (str[i] === sep[0] && i + sep.length <= str.length) {
            ok = true;
            for (let j = 0; j < sep.length; j++) {
                if (str[i + j] !== sep[j]) {
                    ok = false;
                    break;
                }
            }
        }
        if (!ok) {
            resStr += str[i];
        }
        if (ok) {
            i += sep.length - 1;
            res.push(resStr);
            resStr = "";
        }
    }
    res.push(resStr);
    return res;
}

function join(arr, value) {
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
        if (i !== arr.length - 1) {
            res += value;
        }
    }
    return res;
}
