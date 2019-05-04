var http = require("http");

//用于请求的选项
var options = {
    host: "localhost",
    port: "8081",
    path: "/home.html"
};

//处理响应的回调函数
var callback = function (response) {
    //不断更新数据
    var body = "";
    response.on("data", function (data) {
        body += data;
    });

    response.on("end", function () {
        //接收数据完成
        console.log(body);
    });
}

//向服务器端发送请求
var req = http.request(options, callback);
req.end();