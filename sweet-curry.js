function mult2(a) {
    console.log(a);
    return function (b) {
        return a * b;
    }
}

function add3(a) {
    console.log(a);
    return function (c) {
        return function (b) {
            return a + b + c;
        }
    }
}
function sub4(a) {
    return function (c) {
        return function (d) {
            return function (b) {
                return a - c - d - b;
            }
        }
    }
}
