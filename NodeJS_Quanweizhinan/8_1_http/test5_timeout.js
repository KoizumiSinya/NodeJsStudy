var http = require("http");
var server = http.createServer(function (req, res) {
    res.end();
}).listen(8989, "127.0.0.1");
server.setTimeout(10 * 1000, function (socket) {
    console.log("服务器连接超时");
    console.log(socket);
});