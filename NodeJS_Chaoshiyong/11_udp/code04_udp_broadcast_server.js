//使用udp广播服务实现传输
var dgram = require("dgram");
var host = "127.0.0.1";
var port = 8989;

var server = dgram.createSocket("udp4");

server.on("listening", () => {
    var addr = server.address();
    console.log("udp server is listening on " + addr.address + ":" + addr.port);
});

server.on("message", (message, remote) => {
    console.log("udp server received from: " + remote.address + ":" + remote.port);
    console.log("udp server received message is: " + message);
    server.close();
});

server.on("error", (err) => {
    console.log("udp server err: " + err);
});

server.on("close", () => {
    console.log("udp server close...");
});

//此处不需要host
server.bind(port);