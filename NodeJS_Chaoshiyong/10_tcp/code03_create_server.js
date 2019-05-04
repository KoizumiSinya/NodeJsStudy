//创建简单的TCP通信应用
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

net.createServer((socket) => {
    console.log(`server listening on ${host}:${port}`);
    console.log(`server connected: ${socket.remoteAddress}:${socket.remotePort}`);

    socket.on("data", (data) => {
        console.log(`data: ${data}`);
    });
    //向客户端发送数据
    socket.write("server write: hello world!");

    socket.on("close", () => {
        console.log("server close");
    });
}).listen(port, host);

