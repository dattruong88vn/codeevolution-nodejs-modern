const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Thanh Dat");
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
