const fs = require("node:fs");

console.log("first");

const contentFile = fs.readFileSync("./file.txt", "utf-8");
console.log("readSync", contentFile);

console.log("second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("read", data);
  }
});

console.log("third");

fs.writeFileSync("./greet.txt", "Hello Dat 09", { flag: "a" });
fs.writeFile("./greet.txt", "Hello Dat 09 again", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Written");
  }
});
