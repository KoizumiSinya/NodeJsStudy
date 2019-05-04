var net = require("net");
var file = require("fs").createWriteStream("./test10_write_file.txt", "utf-8");
var server = net.createServer(function (socket) {
    console.log("服务器与客户端连接成功");
});

server.on("connection", function (socket) {
    console.log("服务器监听奥socket连接");

    //暂停
    socket.pause();

    //设置定时器，10秒之后唤醒socket把数据写入到file中
    setTimeout(function () {
        socket.resume();
        socket.pipe(file);
    }, 10000);
});

server.listen(8989, "localhost");