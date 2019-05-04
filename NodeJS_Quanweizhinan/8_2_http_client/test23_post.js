var http = require("http");
var options = {
    hostname: "localhost",
    port: 8989,
    path: "/",
    method: "POST"
};

var req = http.request(options,function (res) {
    res.on("data", function (data) {
        console.log("接收到来自服务器的消息:" + data);
    });
});

req.write("你好");
req.end("再见");

// 与test22一起调试使用