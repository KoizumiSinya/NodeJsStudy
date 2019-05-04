var dgram = require("dgram");
var server = dgram.createSocket("udp4");
server.on("message", function (msg, rinfo) {
    console.log("服务器接收到来自客户端的消息：" + msg);
    console.log("客户端的地址：%j", rinfo);

    var buf = new Buffer("确认信息:" + msg);
    server.send(buf, 0, buf.length, rinfo.port, rinfo.address);

    //发送完成之后用计时器把服务器关闭
    setTimeout(function () {
        server.unref();
    }, 10000);
});

server.on("listening", function () {
    var address = server.address();
    console.log("服务器开始监听。地址信息:%j", address);
});

server.bind(8989, "localhost");