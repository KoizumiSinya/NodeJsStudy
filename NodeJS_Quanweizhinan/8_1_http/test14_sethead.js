var http = require("http");
var server = http.createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {
        res.setHeader("Content-type", "text/html");
        if (res.headersSent) {
            console.log("响应头已经发送");
        } else {
            console.log("响应头尚未发送")
        }

        res.write("<html><head><meta charset='UTF-8'/></head>");
        if (res.headersSent) {
            console.log("响应头已经发送");
        } else {
            console.log("响应头尚未发送")
        }
        res.write("你好");
    }
    res.end();
}).listen(8989, "localhost");

//如果是使用setHeader的方式，会在第一次使用write的地方发送请求头