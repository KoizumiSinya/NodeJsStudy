var net = require("net");
var server = net.createServer();
server.on("connection", function (socket) {
    console.log("服务器与客户端连接成功");
    socket.setEncoding("utf-8");
    socket.on("data", function (data) {
        console.log("服务器接收到来自客户端的数据：" + data);
        socket.write("服务器收到数据：" + data);
    });

    socket.on("error", function (err) {
        console.log("服务器与客户端连接过程出现错误%s", err.code);
        socket.destroy();
    });

    socket.on("end", function () {
        console.log("服务器关闭");
        server.unref();
    });

    socket.on("close", function (code) {
        if (code) {
            console.log("由于错误导致socket端口关闭");
            server.unref();
        } else {
            console.log("服务器正常关闭结束");
        }
    });

    //设置达到2个客户端访问之后，就关闭服务器
    server.getConnections(function (err, count) {
        if (count == 2) {
            server.close();
        }
    });
});

server.listen(8989, "localhost");
server.on("close", function () {
    console.log("TCP服务器关闭");
});
