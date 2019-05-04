var http = require("http");
var server = http.createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {
        res.on("close", function () {
            console.log("连接被中断");
        });

        // 设置定时器5秒后发送消息.但是如果在5秒内关闭了浏览器的请求，就会走上面的close回调
        setTimeout(function () {
            res.setHeader("Content-Type", "text/html")
            res.write("<html><head><meta charset='UTF-8'></head>");
            res.write("你好");
            res.end();
        }, 50000);
    }
}).listen(8989, "localhost");