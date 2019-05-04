var net = require("net");
var server = net.createServer(function (socket) {
    console.log("客服端与服务端连接已经建立");
});

server.listen(8989, "localhost", function () {
    console.log("服务器开始监听");
});