import { readdir } from "fs/promises"

const dirPath = process.argv[2]
try {
    const files = await readdir(dirPath)
    // console.log(files)
    soufian(files)
  } catch (err) {
    console.error(`Error reading directory: ${err.message}`)
  }
function soufian(files) {
    let names = files.map((s) => {
        const parts = s.replaceAll(".json", "").split("_")
        let allpart = (parts[1] + " " + parts[0])
        return allpart
      })
    names.sort()
    let res = ""
    for (let index = 0; index < names.length; index++) {
        res += (index+1) + "." + " " + names[index]+"\n"
    }
   console.log(res)
}