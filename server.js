const http = require("http");

const server = http.createServer(function (req, res) {
    if(req.url === "/gobu"){
        res.end("There is no Secret data here");
    }
  res.end("Hello World");
});
server.listen(3333);