var fs = require("fs");
var zlib = require("zlib");

//压缩pipeline_input.txt 为 pipeline_input.txt.gz
fs.createReadStream("pipeline_input.txt")//
    .pipe(zlib.createGzip())//
    .pipe(fs.createWriteStream("pipeline_input.txt.gz"));

console.log("程序压缩完成");