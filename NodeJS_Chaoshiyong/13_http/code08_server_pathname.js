//服务器多路径处理方式
var http = require("http");
var url = require("url");

http.createServer((req, res) => {
    var pathName = url.parse(req.url).pathname;
    if (pathName === "/") {
        res.writeHeader(200, {"Content-Type": "text/plain"});
        res.write("NodeJs -- http");
        res.end("home page");
    } else if (pathName === "/a") {
        res.writeHeader(200, {"Content-Type": "text/plain"});
        res.end("/a dir");
    } else if (pathName === "/b") {
        //将其重定向回到主页
        res.writeHeader(301, {"Location": "/"});
        res.end();
    } else {
        res.writeHeader(404, {"Content-Type": "text/plain"});
        res.end("page not found");
    }
}).listen(8989);