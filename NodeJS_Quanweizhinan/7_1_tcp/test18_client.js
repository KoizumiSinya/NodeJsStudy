var net = require("net");
var client = new net.Socket();

client.setEncoding("utf8");
client.connect(8989, "localhost", function () {
    console.log("客户端已经连接到服务器");
    client.write("你好");
    console.log("当前已经发送了%d字节", client.bytesWritten);
    client.write("再见");
    console.log("当前已经发送了%d字节", client.bytesWritten);
});

client.on("data", function (data) {
    console.log("接收到来自服务器的数据：" + data);
});
client.on("error", function (err) {
    console.log("与服务器连接过程中出现错误%s", err.code);
    client.destroy();
});

//与test14_server 使用