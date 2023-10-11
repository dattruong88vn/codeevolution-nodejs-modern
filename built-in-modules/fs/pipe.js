const fs = require("node:fs");
const zlib = require("node:zlib");

// copy content file from file.txt to file3.txt
const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
});

const writeableStream = fs.createWriteStream("./file3.txt");

readableStream.pipe(writeableStream);

// compress file.txt to file.txt.gz
const writeableStreamZip = fs.createWriteStream("./file3.txt.gz");
const gzip = zlib.createGzip();
readableStream.pipe(gzip).pipe(writeableStreamZip);
