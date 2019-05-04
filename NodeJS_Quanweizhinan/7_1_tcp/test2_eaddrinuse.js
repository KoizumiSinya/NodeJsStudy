var net = require("net");
var server = net.createServer(function (socket) {
    console.log("客服端与服务端连接已经建立");
});
server.listen(8989, "localhost");
server.on("error", function (e) {
    if (e.code == "EADDRINUSE") {
        console.log("服务器端口已经被使用");
    }
});