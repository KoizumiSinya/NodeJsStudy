var net = require("net");
var server = net.createServer();
var fs = require("fs");

server.on("connection", function (socket) {
    console.log("服务器与客户端连接成功");
    socket.setEncoding("utf8");
    var readStream = fs.createReadStream("./test15_set_status_code.js");
    readStream.on("data", function (data) {
        var flag = socket.write(data);
        console.log("write方法的返回值：" + flag);
        console.log("缓存队列中当前缓存了%d字符", socket.bufferSize);
    });

    socket.on("data", function (data) {
        console.log("已接收到客户端发送来的数据")
    });

    socket.on("drain", function () {
        console.log("TCP缓存区中的数据已经全部发送");
    });
});

server.listen(8989, "localhost");

/**
 * 情况一
 * 如果发送的文件时小文件，由于服务器这边要发送的字节数比较少，
 * 因此nodejs将数据直接通过tcp缓存区发送。write返回true，
 * 数据不会存入到缓存队列中，缓存队列中的字符数是0
 *
 * 情况二
 * 如果是大尺寸文件，write将返回false。并且会触发drain事件
 */
