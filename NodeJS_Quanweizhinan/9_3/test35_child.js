var http = require("http");
http.createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<head><meta charset='UTF-8'/></head>");
        res.end("你好");
        console.log("这段代码在运行在子线程");
    }
}).listen(8989);