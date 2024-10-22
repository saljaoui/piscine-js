const firstArg = process.argv[2]
const secondArg = process.argv[3]
let thirdArg =  process.argv[4]
import { readFile, writeFile } from "fs/promises"


async function soufian() {
    if (secondArg === "encode") {
        let content = await readFile(`${firstArg}`, "utf-8")
        let encodedContent = bytesToBase64(new TextEncoder().encode(content))
        if ( typeof thirdArg === "undefined") {
            thirdArg = "cypher.txt"
        }

        await writeFile(`${thirdArg}`, encodedContent)

    } else if (secondArg === "decode") {
        let content = await readFile(`${firstArg}`, "utf-8")
        let decodedContent = new TextDecoder().decode(base64ToBytes(content))
        if (typeof thirdArg === "undefined") {
            thirdArg = "clear.txt"
        }

        await writeFile(`${thirdArg}`, decodedContent)
        
    }
}

function bytesToBase64(bytes) {
    const binString = Array.from(bytes, (byte) =>
      String.fromCodePoint(byte),
    ).join("");
    return btoa(binString);
  }

function base64ToBytes(base64) {
  const binString = atob(base64)
  return Uint8Array.from(binString, (m) => m.codePointAt(0))
}

soufian()