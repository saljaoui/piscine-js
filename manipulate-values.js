function filterValues(nutrients, condition) {
    const filtered = {};
    for (const key in nutrients) {
        if (condition(nutrients[key])) {
            filtered[key] = nutrients[key]; 
        }
    }
    return filtered; 
}

function mapValues(nutrients, condition) {
    for (const key in nutrients) {
        console.log(condition(nutrients[key]));
        nutrients[key] = condition(nutrients[key]); 
    }
    return nutrients; 
}

function reduceValues(nutrients, condition , acc = 0) {
    var res = 0;
    for (const key in nutrients) {
        res += condition(acc , nutrients[key]);
        acc = 0
    }
    return res ;
}
