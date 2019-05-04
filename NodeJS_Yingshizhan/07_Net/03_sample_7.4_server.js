//UDP客户端和服务器 模拟使用UDP拷贝一个文件到另一个地方
var dgram = require('dgram');
var fs = require('fs');
var port = 8989;

//创建一个服务器

function Server() {
    var socket = dgram.createSocket('udp4');
    socket.on('message', function (msg, rinfo) {
        process.stdout.write(msg.toString());
    });

    socket.on('listening', function () {
        console.log('Server ready: ', socket.address());
    });

    socket.bind(port);
}

new Server();