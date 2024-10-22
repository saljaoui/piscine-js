const args = process.argv;
if (args.length > 2) {
  const firstArgument = args[2];
  const arr = firstArgument.split(" ")
  let res = []
  for (let index = 0; index < arr.length; index++) {
    const s = arr[index].slice(Math.ceil(arr[index].length/2))
    const s2 = arr[index].slice(0, arr[index].length - s.length)
    res.push(s+s2)
  }
console.log(res.join(" "));
}
