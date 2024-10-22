function sameAmount(str, exp1, exp2) {

    let soufian1 = new RegExp(exp1, 'g');
    let soufian2 = new RegExp(exp2, 'g');

    let found1 = str.match(soufian1)
    let found2 = str.match(soufian2)

    if( found2 !== null && found1 !== null && found1.length === found2.length ) {
        return true 
    }
    return false
}
