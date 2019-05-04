//获取远程地址
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

var server = net.createServer();
server.on("listening", () => {
    console.log("server listening on port: " + port);
});
server.on("connection", (socket) => {
    console.log("server has a new connection...");

    console.log("remoteAddress: %j", socket.remoteAddress);
    console.log("remotePort: %j", socket.remotePort);
});

server.listen(port, host);