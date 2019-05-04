var http = require("http");
var server = http.createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {
        res.statusCode = 404;
        res.sendDate = false;
        res.setHeader("Content-Type", "text/html");
        res.write("<html><head><meta charset='UTF-8'/></head>");
        res.writeHead("你好");
    }
    res.end();
}).listen(8989, "localhost");