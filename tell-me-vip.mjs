import { readdir, writeFile } from "fs/promises";
import { readFile } from "fs/promises";

const dirPath = process.argv[2];
try {
  const files = await readdir(dirPath);
  soufian(files);
} catch (err) {
  console.error(`Error reading directory: ${err.message}`);
}

async function soufian(nameFiles) {
  let res = [];
  for (const nameFile of nameFiles) {
    try {
      const contents = await readFile(`${dirPath}/${nameFile}`, "utf-8");
      const parsedContents = JSON.parse(contents);
      if (parsedContents.answer === "yes") {
        res.push(nameFile);
      }
    } catch (err) {
      console.error(`Error reading file ${nameFile}: ${err.message}`);
    }
  }
  formatName(res);
}

async function formatName(files) {
  let names = files.map((s) => {
    const parts = s.replaceAll(".json", "").split("_");
    return parts[1] + " " + parts[0];
  });
  names.sort();
  let resulte = names.map((name, index) => `${index + 1}. ${name}`);
  let s = resulte.join("\n");
  await writeFile("vip.txt", s);
}
