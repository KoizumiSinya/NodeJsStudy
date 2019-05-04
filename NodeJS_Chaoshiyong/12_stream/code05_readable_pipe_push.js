//使用可读流发送数据
var stream = require("stream");
var rs = new stream.Readable;
rs.push("Stream ");
rs.push("Readable ");
rs.push("Push() ");
rs.push("Pipe() ");
rs.push("......");
rs.pipe(process.stdout);
//这个代码案例有问题