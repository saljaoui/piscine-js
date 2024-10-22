function defaultCurry(obj) {
    return (obj1) => {
        let res = {}
        let allKeys = new Set([...Object.keys(obj), ...Object.keys(obj1)])
        for (const key of allKeys) {
            if (obj[key] !== undefined && obj1[key] !== undefined) {
                res[key] = obj1[key]
            } else if (obj[key] !== undefined) {
                res[key] = obj[key]
            } else {
                res[key] = obj1[key]
            }
        }
        return res
    }
}

function mapCurry(func) {
    return (obj) => {
        let res = {}
        for (const [key, value] of Object.entries(obj)) {
            res[func([key, value])[0]] = func([key, value])[1]
        }
        return res
    }
}

function reduceCurry(func) {
    return (obj, acc = 0) => {
        let res = acc
        for (const [key, value] of Object.entries(obj)) {
            res = func(res, [key, value])
        }
        return res
    }
}

function filterCurry(func) {
    return (obj) => {
        let res = {}
        for (const [key, value] of Object.entries(obj)) {
            if (func([key, value])) {
                res[key] = obj[key]
            }
        }
        return res
    }
}

function reduceScore(obj , acc = 0) {
    let res = acc
    return reduceCurry((acc, [key, value]) => {
        if (value.isForceUser) {
            res += (value.pilotingScore + value.shootingScore);
        }
        return res;
    })(obj);
}

function filterForce(obj) {
    return filterCurry(([key, value]) => {
        if (value.shootingScore >= 80 && value.isForceUser) {
            return true
        } else {
            return false
        }
    })(obj);
}

function mapAverage(obj) {
    return mapCurry(([key, value]) => {
      const scores = (value.shootingScore + value.pilotingScore)/2;
      return [key, { ...value, averageScore: Number(scores.toFixed(2))}];
    })(obj);
  }
