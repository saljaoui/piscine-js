import { readdir } from "fs/promises";

const dirPath = process.argv[2];
try {
    const files = await readdir(dirPath);
    console.log(files.length);
  } catch (err) {
    console.error(`Error reading directory: ${err.message}`);
  }