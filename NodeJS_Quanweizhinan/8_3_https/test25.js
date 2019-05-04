var https = require("https");
var fs = require("fs");
var pk = fs.readFileSync("./privatekey.pem");
var pc = fs.readFileSync("./certificate.pem");

var options = {
    key: pk,
    cert: pc
};

var server = https.createServer(options, function (req, res) {
    console.log(req.url);
    if (req.url !=="/favicon.ico") {
        res.setHeader("Content-Type", "text/html");
        res.write("<hteml><head><meta charset='UTF-8'/></head></hteml>");
        res.write("你好");
        res.end();
    }
});

server.listen(8989, "localhost", function () {
    console.log("服务器开始监听");
});