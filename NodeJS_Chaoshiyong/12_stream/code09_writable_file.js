//使用可写流 写文件
var fs = require("fs");
var ws = fs.createWriteStream("../files/write_1.txt");
ws.write("stream - ");
ws.write("writable - ");
ws.write("file - ");

setTimeout(() => {
    ws.end();
}, 1000);