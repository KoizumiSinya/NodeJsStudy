//读取文件目录。 读取指定的路径目录，然后把里面的所有文件/目录都打印出来
//fs.readdir; fs.readdirSync

var path = "../files";
var fs = require("fs");
var files = fs.readdirSync(path);
console.log("read files dir: ");
console.log(files);