//http响应码
var http = require("http");
var querystring = require("querystring");

var statusCode = new Array();
statusCode[0] = "201";
statusCode[1] = "202";
statusCode[2] = "203";
statusCode[3] = "401";
statusCode[4] = "404";

var postData = new Array();
for (var i = 0; i < 5; i++) {
    postData[i] = querystring.stringify({
        statusCode: statusCode[i]
    });
}

for (var j = 0; j < 5; j++) {
    var option = {
        hostname: "localhost",
        port: 8989,
        path: "/" + postData[j],
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": postData.length
        }
    };

    var req = http.request(option, (res) => {
        console.log("statusCode: " + res.statusCode);
        console.log("headers: " + JSON.stringify(res.headers));

        res.setEncoding("utf8");
        res.on("data", (chunk) => {
            console.log("body: " + chunk);
        });
    });

    req.on("error", (err) => {
        console.log("request err: " + err);
    });

    req.write("...");
    req.end();
}

