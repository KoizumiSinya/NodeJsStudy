//使用close方法可以拒绝新的客户端连接请求
var net = require("net");
var server = net.createServer(function (socket) {
    server.close(function () {
        console.log("TCP服务器关闭");
    });
});
server.listen(8989, "localhost");