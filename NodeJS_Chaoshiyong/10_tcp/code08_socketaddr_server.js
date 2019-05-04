//获取套接字地址
//套接字地址参数是指由套接字绑定在ip地址的参数信息。nodejs提供了socket.address来完成此功能
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

var server = net.createServer();
server.on("listening", () => {
    console.log("server is listening on port: " + port);
});

server.on("connection", (socket) => {
    console.log("sever has a new connection...");

    console.log("address: %j",  socket.address());
    console.log("localAddress: " + socket.localAddress);
    console.log("localPort: " + socket.localPort);
});

server.listen(port, host);