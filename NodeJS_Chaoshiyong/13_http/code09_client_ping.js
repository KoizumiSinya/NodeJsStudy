//模拟ping命令连接服务器
var http = require("http");
var options = {
    host: "localhost",
    port: 8989,
    path: "/"
};

function ping_server() {
    http.get(options, (res) => {
        if (res.statusCode == 200) {
            console.log("the site is up");
        } else {
            console.log("the site is down");
        }
    }).on("error", (err) => {
        console.log("request error: " + err);
    });
}

//使用这个方法重定向操作，间隔1000毫秒
setInterval(ping_server, 1000);