//获取服务器地址参数
var net = require("net");
var host = "127.0.0.1";
var port = 8989;

var server = net.createServer();
server.on("listening", () => {
    console.log("server listening on port: " + port);

    var address = server.address();
    console.log("server info:%j", address);

    server.close();
});

//调用listen方法，上面的监听就会收到消息
server.listen(port, host);

