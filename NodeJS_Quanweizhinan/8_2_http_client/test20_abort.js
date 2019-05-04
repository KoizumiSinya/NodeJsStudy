var http = require("http");
var options = {
    hostname: "www.amicrosoft.com",
    port: 80,
    path: "/",
    method: "GET"
};

var req = http.request(options, function (res) {
    console.log("状态码：" + res.statusCode);
    console.log("响应头：" + JSON.stringify(res.headers));

    res.setEncoding("utf8");
    res.on("data", function (chunk) {
        console.log("相应内容：" + chunk);
    });
});

req.setTimeout(1000, function () {
    req.abort();
});

req.on("error", function (err) {
    if (err.code === "ECONNRESET") {
        console.log("端口超时");
    }else{
        console.log("请求过程中出现错误%s", err.code);
    }
});

req.end();