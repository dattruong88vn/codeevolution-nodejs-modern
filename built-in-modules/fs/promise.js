const fs = require("node:fs/promises");

// promises
console.log("first");
fs.readFile("./file.txt", "utf-8")
  .then((data) => console.log("promise", data))
  .catch((err) => console.log(err));
console.log("second");

// async/await
async function readFile() {
  try {
    const data = await fs.readFile("./file.txt", "utf-8");
    console.log("async/await", data);
  } catch (err) {
    console.log(err);
  }
}

readFile();
