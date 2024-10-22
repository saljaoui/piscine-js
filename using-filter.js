function filterShortStateName(arr) {
    return arr.filter((a) => a.length < 7);
}
function filterStartVowel(arr) {
    return arr.filter((a) => a.match(/^[aeiou]/i))
}
function filter5Vowels(arr) {
    return arr.filter((a) => (a.match(/[aeiou]/gi) || []).length >= 5);
}
function filter1DistinctVowel(arr) {
    return arr.filter((str) => {
        const distinctVowels = new Set(str.toLowerCase().match(/[aeiou]/g) || []);
        return distinctVowels.size === 1;
      });
}
function multiFilter(arr) {
    return arr.filter((a) => {
      if (a.capital.length < 8) {
        return false;
      }
      if (/^[aeiou]/i.test(a.name)) {
        return false;
      }
      if (!/[aeiou]/i.test(a.tag)) {
        return false;
      }
      if (a.region === "South") {
        return false;
      }
      return true;
    });
  }