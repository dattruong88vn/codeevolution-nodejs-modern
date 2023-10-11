const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const name = "Thanh Dat";
  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
