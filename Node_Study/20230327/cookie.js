const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.headers.cookie);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    res.end("Hello");
  })
  .listen(8080, () => {
    console.log("8080 포트에서 대기 중");
  });
