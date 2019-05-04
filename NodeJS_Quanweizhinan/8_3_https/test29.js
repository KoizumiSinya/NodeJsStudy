var https = require("https");
var options = {
    hostname: "npmjs.org",
    port: 443,
    path: "/",
    method: "GET",
    agent: false
};

var req = https.get(options, function (res) {
    console.log("状态码:" + res.statusCode);
    console.log("响应头:" + JSON.stringify(res.headers));

    res.setEncoding("utf8");
    res.on("data", function (chunk) {
        console.log("响应内容:" + chunk);
    });
});

req.setTimeout(1000, function () {
    req.abort();
});

req.on("error", function (err) {
    if (err.code === "ECONNRESET") {
        console.log("端口超时");
    } else {
        console.log("链接发生错误%s", err.code);
    }
});