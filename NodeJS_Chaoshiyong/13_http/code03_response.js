var http = require("http");
http.createServer((req, res) => {
    var status = req.url.substr(1);
    var status_code = status.substring(12);

    //判断响应状态码是否有效
    if (!http.STATUS_CODES[status_code]) {
        status_code = "404";
    }

    res.writeHeader(status_code, {"Content-Type": "text/html"});
    res.end(http.STATUS_CODES[status_code]);
}).listen(8989);
