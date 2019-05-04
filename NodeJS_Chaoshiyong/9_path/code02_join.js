//合并字符串路径
var path = require("path");
var path_a = "Users";
var path_b = "koizumisinya";
var path_c = "desktop";

//组合成一个完整的路径，注意：最前面的users并没有自动添加上头部的/斜线
console.log("path.join: " + path.join(path_a, path_b, path_c));
//打印结果：Users/koizumisinya/desktop