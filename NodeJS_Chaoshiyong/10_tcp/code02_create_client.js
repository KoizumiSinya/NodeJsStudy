//创建基本的tcp客户端
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

var client = net.connect(port, host, () => {
    console.log("client connected...");
});

client.on("data", (data) => {
    console.log("client on data: " + data);
});

client.on("end", () => {
    console.log("client close...");
});

//这个只是代码的示例，如果直接启动是无法获取到相关的链接的