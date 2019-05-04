var http = require("http");
http.createServer((req, res) => {
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write("<h3>NodeJs</h3>");
    res.end("server on port 8989");
}).listen(8989);