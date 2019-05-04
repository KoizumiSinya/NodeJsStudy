//使用pipe方法实现复制文件
var fs = require("fs");
var readable = fs.createReadStream("../files/123.txt");
var writable = fs.createWriteStream("../files/111.txt");
readable.pipe(writable);