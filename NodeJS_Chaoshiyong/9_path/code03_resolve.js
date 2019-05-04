//解析绝对路径
var path = require("path");
console.log("获取当前命令执行的目录路径: " + process.cwd());

//path路径会默认的将当前的命令行执行的文件夹目录路径，作为已知的绝对路径
var path_a = "code02_join.js";
console.log("path.resolve: " + path.resolve(path_a));
//打印结果 /Users/koizumisinya/Desktop/WorkSpace/WebSpace/MyWebProject/NodeJS_CommonCode/9_path/code02_join.js


var path_b = "temp";
var path_c = "temp.js";
//打印结果 /Users/koizumisinya/Desktop/WorkSpace/WebSpace/MyWebProject/NodeJS_CommonCode/9_path/temp/temp.js
console.log("path.resolve b->c: " + path.resolve(path_b, path_c));
