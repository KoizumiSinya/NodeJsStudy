//相对路径转绝对路径
var fs = require("fs");
var cache = {"/sinya": "/home/sinya"};
var relPath = "../files/123.txt";
var resolvedPath = fs.realpathSync(relPath, cache);
console.log("realPath: " + resolvedPath);