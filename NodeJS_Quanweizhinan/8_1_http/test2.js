var http = require("http");
var server = http.createServer(function (req, res) {

}).listen(8989, "127.0.0.1");

server.on("listening", function () {
    console.log("服务器开始监听");
});

server.on("close", function () {
    console.log("服务器关闭");
});