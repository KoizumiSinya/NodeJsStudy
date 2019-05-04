var http = require("http");
var server = http.createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {
        req.on("data", function (data) {
            console.log("服务器接收到来自客户端的数据：" + data);

            res.write("确认收到消息：" + data);
            res.end();
        });
    }
}).listen(8989, "localhost");