//创建基本的tcp客户端, 这个代码需要 先运行server，再启动。
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

var client = net.connect(port, host, () => {
    console.log("client connected...");
    //客户端链接成功之后 关闭
    client.end();
});

client.on("end", () => {
    console.log("client close...");
});

