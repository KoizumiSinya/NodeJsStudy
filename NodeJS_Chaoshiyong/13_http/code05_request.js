var http = require("http");

var options = {
    hostname: "127.0.0.1",
    port: 8989,
    path: "/",//表示的是访问根目录
    method: "POST"
};

var req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    console.log(`headers: ${JSON.stringify(res.headers)}`);
    res.setEncoding("utf8");
    res.on("data", (chunk) => {
        console.log(`receive body: ${chunk}`);
    });
});

req.on("error", (err) => {
    console.log(`request err: ${err}`);
    console.log("request err: %j", err);
});

req.write("request write data...");
//req.end();