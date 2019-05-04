var fs = require("fs");

//创建一个可读流
var reader = fs.createReadStream("pipeline_input.txt");

//创建一个可写流
var write = fs.createWriteStream("pipeline_output.txt");

//管道流读写(把reader读出来的内容,用write写出去)
reader.pipe(write);
console.log("程序执行完毕");