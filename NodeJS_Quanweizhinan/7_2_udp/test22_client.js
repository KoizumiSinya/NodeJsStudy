var dgram = require("dgram");
var message = new Buffer("你好");
var client = dgram.createSocket("udp4");

client.send(message, 0, message.length, 8999, "localhost", function (err, bytes) {
    if (err) {
        console.log("发送失败%d", err.code);
    } else {
        console.log("已发送%d字节的数据", bytes);
    }
});

client.on("message", function (msg, rinfo) {
    console.log("接收到来自服务器的数据：" + msg);
    console.log("服务器地址信息%j", rinfo.address);
    console.log("服务器端口%s", rinfo.port);
});