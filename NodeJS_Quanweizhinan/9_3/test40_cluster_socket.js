var http = require("http");
var cluster = require("cluster");
var net = require("net");
cluster.setupMaster({exec: "test41_child.js"});

var worker = cluster.fork();
var server = require("net").createServer();
server.on("connection", function (socket) {
    if (socket.remoteAddress !== "192.168.1.100") {
        worker.send("socket", socket);
        return;
    }
    socket.end("客户端请求被主进程处理");
});

server.listen(8989, "192.168.1.100");
worker.on("message", function (m, socket) {
    socket.end("子进程返回消息:" + m);
});