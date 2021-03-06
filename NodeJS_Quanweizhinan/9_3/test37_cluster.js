var cluster = require("cluster");
var http = require("http");

if (cluster.isMaster) {
    cluster.setupMaster({silent: true});
    var worker = cluster.fork();
    worker.process.stdout.on("data", function (data) {
        console.log("接收到来自客户端的请求，目标地址为:" + data);
    });
} else {
    http.createServer(function (req, res) {
        if (req.url !== "/favicon.ico") {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<head><meta charset='UTF-8'/></head>");
            res.end("你好");
            process.stdout.write(req.url);
        }
    }).listen(8989);
}