const vowels = /[aeiou]/i;
function vowelDots(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (vowels.test(str[i])) {
            res += str[i]+"."
        } else {
            res += str[i]
        }
    }
   return res
}