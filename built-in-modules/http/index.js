const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About page");
      break;
    case "/api":
      const data = { firstName: "Dat", lastName: "Truong" };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page Not Found");
      break;
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
