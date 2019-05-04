//获取文件的扩展名
var path = require("path");
var path_a = "temp";
var path_b = "temp.txt";
var path_resolve = path.resolve(path_a, path_b);
console.log(`path_resolve: ${path_resolve}`);

var path_extname = path.extname(path_resolve);
console.log(`path_extname: ${path_extname}`);