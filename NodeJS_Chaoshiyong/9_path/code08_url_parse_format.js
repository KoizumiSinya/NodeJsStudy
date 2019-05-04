//解析与格式化url

var url = require("url");
var queryUrl = "http://localhost:8989/index?name=sinya&gender=male&level=high";
console.log("typeof url: " + typeof url.parse(queryUrl));

var url_parse = url.parse(queryUrl);
console.log("url.parse: %j", url_parse);

var url_format = url.format(url_parse);
console.log("url.format: " + url_format);