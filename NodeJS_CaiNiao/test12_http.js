var server = require("./httpserver");
var router = require("./router");
server.start(router);