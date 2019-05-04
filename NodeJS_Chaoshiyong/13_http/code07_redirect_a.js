//进行重定向操作
var http = require("http");
http.createServer((req, res) => {
    res.writeHeader(301, {"Location": "http://localhost:8989/"});

    res.write("<h3>Hello World</h3>");
    res.end("<p>重定向 port 8989</p>");

}).listen(8181);

//重定向的意思是，两个服务器，A监听8181端口，但是重定向了 B服务器的8989端口。所以访问A服务器的时候实际上又去连接了B服务器