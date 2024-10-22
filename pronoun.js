function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const result = {};
    const lowerStr = str.toLowerCase();
    const words = lowerStr.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (pronouns.includes(word)) {
        if (!result[word]) {
          result[word] = { word: [], count: 0 };
        }
        result[word].count++;
        if (i < words.length - 1 && !pronouns.includes(words[i + 1])) {
          result[word].word.push(words[i + 1].replace(",", ""));
        }
      }
    }
    return result;
  }
// const ex = 'Using Array Destructuring, you you can iterate through objects easily.';
// console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'));

