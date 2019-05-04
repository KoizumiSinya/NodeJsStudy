//创建基本的tcp服务器
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

net.createServer((socket) => {

    console.log("socket server created on " + host + ":" + port);

    socket.on("data", (data) => {
        console.log("socket on data " + data);
    });

    socket.on("close", (data) => {
        // command + D 关闭
        console.log("socket on close " + data);
    });

}).listen(port, host);

//启动这段代码之后，可以通过浏览器访问 127.0.0.1:8989 然后这边的输出控制台就会获得信息