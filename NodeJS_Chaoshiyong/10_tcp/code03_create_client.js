//创建基本的tcp客户端, 这个代码需要 先运行server，再启动。
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

var client = net.connect(port, host, () => {
    console.log("client connected...");
    client.write("I want to access");
});

client.on("data", (data) => {
    console.log("client on data: " + data);
});

client.on("end", () => {
    console.log("client close...");
});

