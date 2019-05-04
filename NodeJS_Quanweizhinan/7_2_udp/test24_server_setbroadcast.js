var dgram = require("dgram");
var server = dgram.createSocket("udp4");
server.on(("message", function (msg) {

    server.setBroadcast(true);

    var buf = new Buffer("已经接收到服务器发送来的数据:" + msg);
    server.send(buf, 0, buf.length, 41235, "192.178.1.255");
}));

server.bind(41234, "192.168.1.100");
