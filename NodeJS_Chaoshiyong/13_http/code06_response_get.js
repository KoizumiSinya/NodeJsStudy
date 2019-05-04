var http = require("http");
var url = require("url");
var qs = require("querystring");

http.createServer((req, res) => {
    console.log("url: " + req.url);

    res.writeHeader(200, {
        "Content-Type": "text/plain"
    });

    var query = url.parse(req.url).query;
    console.log(query);

    var qs_parse = qs.parse(query);
    console.log(qs_parse);

    res.end(JSON.stringify(qs_parse));
}).listen(8989);