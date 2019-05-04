var net = require("net");
var server = net.createServer();
server.on("connection", function (socket) {
    console.log("服务器与客户端连接成功");
    socket.setEncoding("utf-8");
    socket.on("data", function (data) {
        console.log("服务器接收到来自客户端的数据：" + data);
        socket.write("你好 访问成功");
    });
});

server.listen(8989, "localhost");