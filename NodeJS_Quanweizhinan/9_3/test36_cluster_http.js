var cluster = require("cluster");
var http = require("http");
if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();
} else {
    http.createServer(function (req, res) {
        if (req.url !== "/favicon.ico") {
            var sum = 0;
            for (var i = 0; i < 50000; i++) {
                sum += 1;
            }

            res.writeHead(200);
            res.write("客户端请求在子线程" + cluster.worker.id + "中被处理");
            res.end("sum=" + sum);
        }
    }).listen(8989);
}
//可以用test26.js 通过命令行的方式启动去访问