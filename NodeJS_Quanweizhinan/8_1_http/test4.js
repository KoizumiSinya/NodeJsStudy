var http = require("http");
var server = http.createServer(function (req, res) {

}).listen(8989, "127.0.0.1");
server.on("connection", function (socket) {
    console.log("客户端已经连接到服务器");
});