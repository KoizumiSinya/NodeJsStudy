var net = require("net");
var file = require("fs").createWriteStream("./test8_wirite_file.txt");

var server = net.createServer(function (socket) {
    console.log("服务器与客户端连接成功");
});

//连接成功之后将会把数据写到file中
server.on("connection", function (socket) {

    //写入的同时 不会立即执行end结束
    socket.pipe(file, {end: false});

    //设置监听到end（客户端那边的cmd关闭）之后，就会在末尾追加886几个字符
    socket.on("end", function () {
        file.end("886");
    });
});

server.listen(8989, "localhost");