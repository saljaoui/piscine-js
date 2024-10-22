import { readFile } from "fs/promises";

const nameFile = process.argv[2];
try {
  const contents = await readFile(nameFile, "utf-8");
  reversing(contents);
} catch (err) {
  console.error(err.message);
}

function reversing(str) {
  const arr = str.split(" ");
  let res = [];
  for (let index = 0; index < arr.length; index++) {
    const word = arr[index];
    const midIndex = Math.floor(word.length / 2);
    const firstHalf = word.slice(0, midIndex);
    const secondHalf = word.slice(midIndex);
    res.push(secondHalf + firstHalf);
  }
  console.log(res.join(" "));
}
