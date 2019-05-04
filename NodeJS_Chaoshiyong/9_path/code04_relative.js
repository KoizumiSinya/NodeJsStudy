//解析相对路径
var path = require("path");
console.log("当前命令执行的文件夹目录: " + process.cwd());

var path_a = "temp.txt";
var resolve_a_path = path.resolve(path_a);
console.log("path.resolve: " + resolve_a_path);

var path_b = "temp";
var path_c = "abc.txt";
var resolve_b_path = path.resolve(path_b, path_c);
console.log("path.relative: " + path.relative(resolve_a_path, resolve_b_path));