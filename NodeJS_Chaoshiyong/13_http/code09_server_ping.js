var http = require("http");
http.createServer((req, res) => {
    if (Math.round(Math.random())) {
        res.writeHeader(200, {"Content-Type": "text/html"});
    } else {
        res.writeHeader(404, {"Content-type": "text/html"});
    }
    res.end();
}).listen(8989);

//ping命令是指  端对端的连通，通常用来检测网络是否连通、帮助分析网络故障及其原因。