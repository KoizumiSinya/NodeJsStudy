//如何写一个http的头文件
var http = require("http");
http.createServer((req, res) => {
    var body = "write header";
    res.writeHeader(200, {
        "Content-Length": body.length,
        "Content-Type": "text/plain"
    });

    res.write("this is content");
    res.write("hello world");
    res.end();

}).listen(8989);
