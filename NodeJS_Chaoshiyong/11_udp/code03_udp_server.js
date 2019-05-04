//创建简单的udp应用
var dgram = require("dgram");
var host = "127.0.0.1";
var port = 8989;

var server = dgram.createSocket("udp4");
server.on("listening", () => {
    //返回套接字地址信息
    var address = server.address();
    console.log(`udp server is listening on ${host}:${port}`);
    console.log(`udp server is address on ${address.address}:${address.port}`);
});

server.on("message", (message, remote) => {
    console.log("udp server message event from: " + remote.address + ":" + remote.port);
    console.log("udp server receive message: " + message);
    server.close();
});

server.on("error", (err) => {
    console.log("udp server err: " + err);
    server.close();
});

server.on("close", () => {
    console.log("udp server close...");
});

server.bind(port, host);