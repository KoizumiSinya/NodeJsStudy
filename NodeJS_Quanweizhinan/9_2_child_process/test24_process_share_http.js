var http = require("http");
var child_process = require("child_process");
var net = require("net");

//创建一个子进程，运行同一个目录下的test25.js脚本
var child = child_process.fork("test25_child.js");
//创建一个服务
var server = net.createServer();

server.listen(8989, "localhost", function () {

    //把服务对象作为子进程的send的参数，发送出去
    child.send("server", server);
    console.log("父进程中的服务器已经创建");

    //创建http服务器
    var httpServer = http.createServer();

    //当http接收到客户端请求之后， 计算1~100000的累加值
    httpServer.on("request", function (req, res) {
        if (req.url !== "/favicon.ico") {
            var sum = 0;
            for (var i = 0; i < 100000; i++) {
                sum += i;
            }
            res.write("客户端请求在父进程中被处理");
            res.end("sun=" + sum);
        }
    });
    httpServer.listen(server);
});

/***
 * 子进程与父进程之间 共享http服务器的示例
 * test25.test26一起使用测试
 */