var http = require("http");
var server = http.createServer(function (req, res) {

}).listen(8989, "127.0.0.1");

server.on("error", function (err) {
    if (err.code == "EADDRINUS") {
        console.log("服务器地址及其端口已被占用");
    }
});