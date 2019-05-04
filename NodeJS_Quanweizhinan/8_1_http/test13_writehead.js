var http = require("http");
var server = http.createServer(function (req, res) {
    if (req.url != "/favicon.ico") {
        if (res.headersSent) {
            console.log("响应头已经发送");
        } else {
            console.log("响应头尚未发送")
        }

        res.writeHead(200, {"Content-Type": "text/html"});
        if (res.headersSent) {
            console.log("响应头已经发送");
        } else {
            console.log("响应头尚未发送")
        }

        res.write("<html><head><meta charset='UTF-8'/></head>");
        res.write("你好");
    }

    res.end();
}).listen(8989, "localhost");

//使用writeHead的同时，就会把响应头发送出去