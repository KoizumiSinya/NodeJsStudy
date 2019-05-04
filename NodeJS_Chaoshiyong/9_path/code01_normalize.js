//规范化字符串路径
var path = require("path");
//标准的路径
var path_a = "/Users/koizumisinya/Desktop/WorkSpace/WebSpace/MyWebProject/NodeJS_CommonCode/9_path";
console.log("path.normalize path_a is: " + path.normalize(path_a));

var path_b = "/Users/koizumisinya//Desktop//WorkSpace//WebSpace//MyWebProject//NodeJS_CommonCode//9_path";
console.log("path.normalize path_b is: " + path.normalize(path_b));

var path_c = "/Users/koizumisinya/Desktop/WorkSpace/WebSpace/MyWebProject/NodeJS_CommonCode/.";
console.log("path.normalize path_c is: " + path.normalize(path_c));

// .. 会表示往上一层目录返回
var path_d = "/Users/koizumisinya/Desktop/WorkSpace/WebSpace/MyWebProject/NodeJS_CommonCode/..";
console.log("path.normalize path_d is: " + path.normalize(path_d));
var path_g = "/Users/koizumisinya/Desktop/WorkSpace/WebSpace/MyWebProject/NodeJS_CommonCode/../..";
console.log("path.normalize path_g is: " + path.normalize(path_g));

var path_e = "/Users/koizumisinya/Desktop/WorkSpace/WebSpace/MyWebProject/NodeJS_CommonCode/.abc";
console.log("path.normalize path_e is: " + path.normalize(path_e));
var path_f = "/Users/koizumisinya/Desktop/WorkSpace/WebSpace/MyWebProject/NodeJS_CommonCode/..abc";
console.log("path.normalize path_f is: " + path.normalize(path_f));
