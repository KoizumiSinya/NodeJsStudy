var http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h3>Hello world</h3>");
    res.end();
}).listen(8989);


