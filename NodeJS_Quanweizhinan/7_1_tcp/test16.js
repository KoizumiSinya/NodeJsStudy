var net = require("net");
var client = new net.Socket();

client.setEncoding("utf8");
client.connect(8989, "localhost", function () {
    console.log("客户端已经于服务器连接成功");
    client.write("你好");

    setTimeout(function () {
        client.write("再见");
    }, 10000);
});

client.on("data", function (data) {
    console.log("客户端接收到来自服务器的数据:" + data);
});

client.on("error", function (err) {
    console.log("客户端与服务器连接过程出现错误%s，断开连接", err.code);
    client.destroy();
});