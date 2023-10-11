const http = require("node:http");

const server = http.createServer((req, res) => {
  const hero = {
    firstName: "Dat",
    lastName: "Truong Thanh",
  };

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(JSON.stringify(hero));
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
