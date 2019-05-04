//创建udp服务器
var dgram = require("dgram");//引入udp的模块
var host = "127.0.0.1";
var port = 8989;

//创建并设置udp类型
var server = dgram.createSocket("udp4");
server.on("listening", () => {
    console.log("udp server is listening on port: " + port);
});

server.on("message", (msg, remote) => {
    console.log("message event...: " + msg);
    server.close();
});

server.on("error", (err) => {
    console.log("udp server err: " + err);
    server.close();
});

server.on("close", () => {
    console.log("udp server close...");
});

//为udp服务器绑定主机和端口号
server.bind(port, host);





