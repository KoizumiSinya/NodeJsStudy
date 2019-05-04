var net = require("net");
var server = net.createServer(function (connection) {
    console.log("客户端已经连接");
    connection.on("end", function () {
        console.log("客户端已经关闭");
    });

    connection.write("hello world\n");
    connection.pipe(connection);

});

server.listen(8080, function () {
    console.log("服务器开始监听");
});