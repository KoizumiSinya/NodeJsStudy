var cluster = require("cluster");
var http = require("http");
if (cluster.isMaster) {
    cluster.setupMaster({silent: true});

    var worker = cluster.fork();
    worker.process.stdout.on("data", function (data) {
        console.log("接收到来自客户端的请求，目标地址:" + data);
        worker.kill();
    });

    cluster.on("exit", function (worker, code, signal) {
        if (worker.suicide === true) {
            console.log("子进程%d自动退出", worker.id);
        } else {
            console.log("子进程%d异常退出", worker.id);
        }

        if (signal) {
            console.log("退出信号%s", signal);
        }
    });
} else {
    var server = http.createServer(function (req, res) {
        if (req.url !== "/favicon.ico") {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<head><meta charset='UTF-8'/></head>");
            res.end("你好");
            process.stdout.write(req.url);
        }
    });
    server.listen(8989);
}