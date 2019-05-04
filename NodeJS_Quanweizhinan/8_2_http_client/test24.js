var http = require("http");
var url = require("url");
var server = http.createServer(function (sreq, sres) {
    var url_parts = url.parse(sreq.url);
    var options = {
        host: "www.amazon.cn",
        port: 80,
        path: url_parts.pathname,
        headers: sreq.headers
    };

    var creq = http.get(options, function (cres) {
        sres.writeHead(cres.statusCode, cres.headers);
        cres._pipe(sres);
    });

    sreq.pipe(creq);
});

server.listen(8989, "localhost");

//类似于代理服务器。访问127.0.0.1的时候，实质上市区访问了http://www.amazon.cn