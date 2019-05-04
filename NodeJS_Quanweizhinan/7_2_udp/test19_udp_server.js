var dgram = require("dgram");
var server = dgram.createSocket("udp4");


//当socket端口接收到数据时，会触发message事件，等同于才createSocket中的callback
server.on("message", function (msg, rinfo) {

    //msg存放的是一个buffer对象，rinfo是一个具有属性值的对象
    console.log("服务器接收到来自客户端的数据：" + msg);
    console.log("客户端地址信息%j", rinfo);

    var buf = new Buffer("确认信息：" + msg);
    server.send(buf, 0, buf.length, rinfo.port, rinfo.address);
});

// 监听发送过来的数据，等同于bind中的callbak
server.on("listening", function () {
    var address = server.address();
    console.log("服务器开始监听。地址信息为%j", address);
});

// 必须绑定端口号和地址，才能知道往哪个地址发送数据
server.bind(8989, "localhost");