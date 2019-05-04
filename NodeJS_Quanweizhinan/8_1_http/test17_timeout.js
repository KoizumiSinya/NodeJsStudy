var http = require("http");
var server = http.createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {

        //设置了超时响应时间是1秒
        res.setTimeout(1000);

        //这里复写了超时响应的回调
        //如果注释下面的代码，不复写监听超时响应的话，就会由系统去执行超时的方法内容。
        res.on("timeout", function () {
            console.log("响应超时");
        });

        setTimeout(function () {
            res.setHeader("Content-Type", "text/html");
            res.write("<html><head><meta charset='UTF-8'/></head>");
            res.write("你好");
            res.end();
        }, 2000);
    }
}).listen(8989, "localhost");