var net = require("net");
var client = new net.Socket();
client.setEncoding("utf-8");
client.connect(8989, "localhost", function () {
    console.log("客户端连接到服务器");
    client.write("你好");
});
client.on("data", function (data) {
    console.log("客户端接收到服务器发来的数据:" + data);
});