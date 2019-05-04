//创建tcp服务器的另外一种方式
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

var server = net.createServer();
//监听端口和主机
server.listen(port, host);
console.log(`server listening on ${host}:${port}`);


//通过显式的调用与connection事件建立tcp连接
server.on("connection", (socket) => {
    console.log(`connected ${socket.remoteAddress}:${socket.remotePort}`);
});
