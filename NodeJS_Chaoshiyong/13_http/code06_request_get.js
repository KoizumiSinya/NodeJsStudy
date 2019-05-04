//发送与处理get请求
var http = require("http");
http.get("http://127.0.0.1:8989/signature=123456&echostr=11111&timestamp=555", (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.setEncoding("utf8");
    res.on("data", (chunk) => {
        console.log(`body: ${chunk}`);
    });
}).on("error", (err) => {
    console.log("request error: %j", err);
});