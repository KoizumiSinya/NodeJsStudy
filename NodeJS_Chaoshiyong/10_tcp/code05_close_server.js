//服务器端绑定事件
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

var server = net.createServer();

server.on("listening", () => {
        console.log(`server listening on port:${port}`);
    }
);

//如果有客户端链接了，就会调用下面的监听
server.on("connection", (socket) => {
    console.log("server connection");

    //关闭
    server.close();
});

//监听关闭的时候
server.on("close", () => {
    console.log("server closed");
});

server.listen(port, host);