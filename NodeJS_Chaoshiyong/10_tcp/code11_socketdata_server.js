//控制套接字数据流的应用
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

var sockData = true;

var server = net.createServer();
server.on("listening", () => {
    console.log("server is listening on port: " + port);
});

server.on("connection", (socket) => {
    console.log("server has a new connection...");

    if (sockData) {
        socket.resume();
        sockData = false;
    } else {
        socket.pause();
        sockData = true;
    }

    socket.on("data", (data) => {
        if (socket.bytesRead > 32) {
            console.log("data: " + socket.remoteAddress + ": is too long!...");
        } else {
            console.log("data: " + socket.remoteAddress + ": -->" + data);
        }
        socket.write("server write: " + data);
    });
});

server.listen(port, host);