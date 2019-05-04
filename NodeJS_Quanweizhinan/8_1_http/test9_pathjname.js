var http = require("http");
url = require("url");

var server = http.createServer().listen(8989, "localhost");

server.on("request", function (req, res) {
    if (req.url != "/favicon.ico") {
        res.write("<html><head><meta charset='UTF-8'/></head>");
        var url_parts = url.parse(req.url);
        switch (url_parts.pathname) {
            case "/":
            case "/index.html":
                res.write("<body>当前访问的是首页</body></html>");
                break;

            default:
                res.write("<body>当前访问的页面是" + url_parts.pathname + "</body></html>");
                break;
        }
    }

    res.end();
});