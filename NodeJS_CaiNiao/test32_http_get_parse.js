var http = require("http");
var url = require("url");
var util = require("util");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

    //解析url里面的参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name + "\n");
    res.write("网站url：" + params.url);
    res.end();
}).listen(3000);

//运行后在浏览器访问 http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com