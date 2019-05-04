//构建一个基本的http客户端
var http = require("http");
var option = {
    hostname: "localhost",
    port: 8989,
    path: "/",//服务器路径
    method: "POST"
};

var req = http.request(option, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    console.log(`header:${JSON.stringify(res.headers)}`);
    res.setEncoding("utf8");
    res.on("data", (chunk) => {
        console.log(`body: ${chunk}`);
    });
});

req.on("error", (err) => {
    console.log("request error: " + err);
});

req.write("this is request content");
req.end();