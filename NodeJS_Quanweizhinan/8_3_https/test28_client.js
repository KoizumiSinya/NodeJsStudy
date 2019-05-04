var https = require("https");
var options = {
    hostname: "anpmjs.org",
    port: 443,
    path: "/",
    method: "GET",
    agent: false
};

var req = https.request(options, function (res) {
    console.log("状态码:" + res.statusCode);
    console.log("响应头:" + JSON.stringify(res.headers));

    res.setEncoding("utf8");
    res.on("data", function (chunk) {
        console.log("响应内容:" + chunk);
    })
});

req.end();
req.setTimeout(1000, function () {
    req.abort();
});

req.on("error", function (err) {
    if (err.code === "ECONNRESET") {
        console.log("端口连接超时");
    } else {
        console.log("请求数据过程发生错误%s", err.code);
    }
})
