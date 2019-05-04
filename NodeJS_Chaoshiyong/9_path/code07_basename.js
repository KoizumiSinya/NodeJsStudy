//获取路径中最后的部分
var path = require("path");
var path_a = "temp";
var path_b = "temp.txt";
var path_resolve = path.resolve(path_a, path_b);
console.log(`path_resolve: ${path_resolve}`);

var path_extname = path.extname(path_resolve);
console.log(`path_extname: ${path_extname}`);

//第一个参数是绝对路径，第二个参数是需要排除掉的后缀
var path_basename = path.basename(path_resolve, path_extname);
console.log("basename: " + path_basename);

var path_basename2 = path.basename(path_resolve, path_b);
console.log("basename2: " + path_basename2);
