//url的参数转换url对象
var url = require("url");
var queryString = require("querystring");
var queryUrl = "http://localhost:8989/index?name=sinya&gender=male&level=high";

//先获取
var url_parse = url.parse(queryUrl).query;
var queryStr_parse = queryString.parse(url_parse);

//打印 {"name":"sinya","gender":"male","level":"high"}
console.log("querystring_parse: %j", queryStr_parse);