var net = require("net");
var server = net.createServer(function (socket) {
    console.log("服务器：客服端已经与服务端建立连接...");
});
server.listen(8989, "localhost", function () {
    var address = server.address();
    console.log("打印监听的地址信息：%j", address);
});