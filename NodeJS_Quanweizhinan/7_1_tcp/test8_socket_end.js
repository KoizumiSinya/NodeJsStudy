var net = require("net");
var server = net.createServer();
server.on("connection", function (socket) {
    socket.setEncoding("utf-8");
    socket.on("data", function (data) {
        console.log("服务器接收到客户端发来的数据" + data);
        console.log("已接收了%d字节的数据", socket.bytesRead);
    });

    socket.on("end", function () {
        console.log("服务器关闭连接");
    });
});

server.listen(8989, "localhost");