var http = require("http");
var options = {
    hostname: "www.microsoft.com",
    port: 80,
    path: "/"
};

var req = http.get(options, function (res) {
    console.log("响应码：" + res.statusCode);
    console.log("响应头：" + JSON.stringify(res.headers));
    res.setEncoding("utf8");

    res.on("data", function (chunk) {
        console.log("响应内容：" + chunk);
    });
});

req.setTimeout(1000, function () {
    req.abort();
});

req.on("error", function (err) {
    console.log("请求数据过程中出现错误%s", err.code);
});