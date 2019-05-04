var http = require("http");
var server = http.createServer(function (req, res) {
    console.log("服务器访问成功");
    if (req.url !== "/favicon.ico") {
        res.writeHead(200,
            {
                'Content-Type': 'text/plain',//
                'Access-Control-Allow-Origin': 'http://localhost:63342'
            });
        res.write("你好");
    }
    res.end();
}).listen(8989, "localhost");