const http = require("http");

const server = http.createServer((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(
    JSON.stringify({
      data: {
        name: "Thanh Dat",
        ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || null,
      },
    })
  );
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("Server is running on port ", PORT));
