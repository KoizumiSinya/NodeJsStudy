var http = require("http");
var server = http.createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {
        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Access-Control-Allow-Origin", "http:localhost");
        res.write("你好");
    }
    res.end();
}).listen(8989, "localhost");