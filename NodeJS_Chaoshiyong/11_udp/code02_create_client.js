//创建udp客户端
var dgram = require("dgram");//引入udp的模块
var host = "127.0.0.1";
var port = 8989;
var message = new Buffer("udp client say: hello world");

//创建并设置udp类型
var client = dgram.createSocket("udp4");

client.send(message, 0, message.length, port, host, (err, bytes) => {
    if (err) {
        console.log("err: " + err);
    } else {
        console.log("client will send message to...");
        client.close();
    }
});

client.on("close", () => {
    console.log("udp client close...");
});




