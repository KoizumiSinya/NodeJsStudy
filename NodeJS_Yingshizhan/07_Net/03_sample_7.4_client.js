//UDP客户端和服务器 模拟使用UDP拷贝一个文件到另一个地方
var dgram = require('dgram');
var fs = require('fs');
var port = 8989;
var defaultSize = 16;

//创建一个客户端
function Client(remoteIP) {
    var inStream = fs.createReadStream(__filename);//创建一个可读流
    var socket = dgram.createSocket('upd4');
    inStream.on('readable', function () {
        sendData();
    });

    function sendData() {
        var message = inStream.read(defaultSize);
        if (!message) {
            //当客户端完成任务之后，当不需要时调用unref来安全的关闭
            return socket.unref();
        }

        socket.send(message, 0, message.length, port, remoteIP, //
            function (err, bytes) {
                sendData();
            });
    }
}

new Client();