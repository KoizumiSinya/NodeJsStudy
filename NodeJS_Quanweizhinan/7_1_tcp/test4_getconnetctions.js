var net = require("net");
var server = net.createServer(function (socket) {

    //获取当前连接的客服端数量 以及最大连接数
    server.getConnections(function (err, count) {
        console.log("当前存在%d个客服端连接", count);
        server.maxConnetions = 2;//设置最大连接数量
        console.log("TCP服务器的最大连接数量是%d", server.maxConnetions);
    });
});

server.listen(8989, "localhost");
console.log("TCP服务器创建成功");