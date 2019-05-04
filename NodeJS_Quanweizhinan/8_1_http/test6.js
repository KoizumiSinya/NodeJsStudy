var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {

    if (req.url != "/favicon.ico") {
        var out = fs.createWriteStream("./test6_write.txt");
        out.write("客户端请求所用的方法:" + req.method);
        out.write("\n客户端请求所用的url:" + req.url);
        out.write("\n客户端请求头对象:\n" + JSON.stringify(req.headers));
        out.end("\n客户端请求的http版本:" + req.httpVersion);
    }

    res.end();
}).listen(8989, "127.0.0.1");
