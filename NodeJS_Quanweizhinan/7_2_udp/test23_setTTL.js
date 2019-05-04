// 从端口发出去的数据包在被路由废弃之前，可以经过的最大路由数目
var dgram = require("dgram");
var server = dgram.createSocket("udp4");
server.on("message", function (msg, rinfo) {
    var buf = new Buffer("确认信息：" + msg);
    server.setTTL(128);
    server.send(buf, 0, buf.length, rinfo.port, rinfo.address);
});

server.bind((8989, "localhost"));