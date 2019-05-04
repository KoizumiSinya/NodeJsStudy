var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {
        fs.readFile("test16_kill.js", function (err, data) {
            if (err) {
                console.log("读取文件失败");
            } else {
                var flag = res.write(data);
                console.log(flag);

                //如果文件是小文件，就会打印true；大文件会打印false
                // 主要原因就是缓存区域的使用的问题
                res.end();
            }
        });
    }
}).listen(8989, "localhost");