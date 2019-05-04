var net = require("net");
var server = net.createServer();

//用.on方法监听 连接成功的事件
server.on("connection", function (socket) {
    console.log("服务端与客户端建立连接成功");

    //用.on方法监听 接收到客服端传递的数据
    socket.on("data", function (data) {
        console.log("服务端接收到数据" + data);
    });
});

server.listen(8989, "localhost");


//启动这个js之后，用cmd 输入telnet localhost 8989 即可连接成功，
//然后继续输入一些文字，服务器端这边就会接收到，并且打印出来