//获取当前服务器连接数
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

var server = net.createServer();
server.on("listening", () => {
    console.log("server listening on port: " + port);
});

server.on("connection", (socket) => {
    console.log("server has a new connection");

    server.getConnections((err, count) => {
        if (err) {
            console.log("getConnections err: " + err);
        } else {
            console.log("current connections is: " + count);
        }
    });
});

server.on("close", () => {
    console.log("server closed...");
});

server.on("error", (err) => {
    console.log("server error: " + err);
});

server.listen(port, host);

