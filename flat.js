function flat(arr, num = 0) {
    let res = [];
    let one = 0;
    function flatRepet(arr2) {
        for (let i = 0; i < arr2.length; i++) {
            if (Array.isArray(arr2[i]) && one <= num ) {
                one++
                flatRepet(arr2[i]); 
            } else {
                res.push(arr2[i]); 
            }
        }
    }
    flatRepet(arr); 
    return res; 
}
