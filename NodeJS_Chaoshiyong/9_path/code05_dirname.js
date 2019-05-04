//获取文件夹路径
var path = require("path");
var path_a = "temp";
var path_b = "temp.txt";
var path_resolve = path.resolve(path_a, path_b);
console.log(`path_resolve: ${path_resolve}`);

//得到的是全路径的文件夹路径
var pathName = path.dirname(path_resolve);
console.log(`path_name: ${pathName}`);