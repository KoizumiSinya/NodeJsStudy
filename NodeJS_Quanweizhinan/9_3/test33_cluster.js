var cluster = require("cluster");
var http = require("http");

if (cluster.isMaster) {
    cluster.fork();
    console.log("这段代码运行在主进程中");
} else {
    http.createServer(function (req, res) {
        if (req.url !== "/favicon.ico") {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<head><meta charset='UTF-8'/></head>");
            res.end("你好\n");
            console.log("这段代码被运行在子进程中");
        }
    }).listen(8989);
}

cluster.on("fork", function (worker) {
    console.log("子进程:" + worker.id + "被开启");
});

cluster.on("listening", function (worker, address) {
    console.log("子进程的服务器开始监听:" + address.address + ":" + address.port);
});