//使用套接字写数据
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

var server = net.createServer();
server.on("listening", () => {
    console.log("server is listening on port: " + port);
});
server.on("connection", (socket) => {
    console.log("server has a new connection");

    socket.on("data", (data) => {
        console.log("socket.bytesRead: " + socket.bytesRead);
        console.log("socket data: " + socket.remoteAddress + "\n" + data);

        //回发该数据，客户端将收到来自服务端的数据
        socket.write("server write: " + data);
        console.log("write: " + socket.bytesWritten);
    });
});

server.listen(port, host);