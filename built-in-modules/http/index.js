const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  // use readFileSync for small file
  //   const html = fs.readFileSync("./index.html");

  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.end(html);

  // use stream for large file
  const readableStream = fs.createReadStream(__dirname + "/index.html");
  readableStream.pipe(res);
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
