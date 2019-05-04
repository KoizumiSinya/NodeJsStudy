var dgram = require("dgram");
var client = dgram.createSocket("udp4");
client.bind(41235, "192.168.1.102");

var buf = new Buffer("你好");
client.send(buf, 0, buf.length, 41234, "192.168.1.100");
client.on("message", function (msg, rinfo) {
    console.log("已经接收到来自服务器的数据%s", msg);
});