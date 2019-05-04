var https = require("https");
var options = {
    hostname: "npmjs.org",
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
