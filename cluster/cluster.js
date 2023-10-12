const cluster = require("node:cluster");
const OS = require("node:os");

console.log(OS.cpus().length);

if (cluster.isMaster) {
  console.log(`Master is running on ${process.pid}`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker is started on ${process.pid}`);
  const http = require("node:http");
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 5000000000; i++) {}
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow page");
    }
  });

  server.listen(8000, () => console.log("Server listen on port 8000"));
}
