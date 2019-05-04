//设定和获取http头文件
var http = require("http");
http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Set-Cookie", ["type=sinya", "language=javascript"]);

    var content_type = res.getHeader("Content-Type");
    console.log(`查看header信息: ${content_type}`);

    var cookie = res.getHeader("Set-Cookie");
    console.log(`查看cookie: ${cookie}`);


    //发送页面内容
    res.write("<h3>NodeJs Title</h3>");
    res.write(`<h3>${content_type}</h3>`);
    res.write(`<h3>${cookie}</h3>`);
    res.end();
    
}).listen(8989);