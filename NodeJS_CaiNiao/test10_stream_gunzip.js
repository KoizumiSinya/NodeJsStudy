var fs = require("fs");
var zlib = require("zlib");

//解压
fs.createReadStream("pipeline_input.txt.gz")//
    .pipe(zlib.createGunzip())//
    .pipe(fs.createWriteStream("pipeline_input.txt"));

console.log("文件加压完成");