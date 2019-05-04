//功能增强的读文件应用
var readPathSync = "../files/123.txt";
var fs = require("fs");
var content = fs.readFileSync(readPathSync, "utf-8");
console.log("read txt: " + content);

fs.open(readPathSync, "r", (err, fd) => {
    if (err) {
        console.log("err: " + err);
    } else {
        var buf = new Buffer(8);
        var readByte = fs.readSync(fd, buf, 0, 8, null);
        console.log("first read bytes: " + readByte);
        console.log("first read content: " + buf);

        var buf2 = new Buffer(4);
        var readByte2 = fs.readSync(fd, buf2, 0, 4, 4);
        console.log("second read bytes: " + readByte2);
        console.log("second read content: " + buf2);

        var buf3 = new Buffer(6);
        var readByte3 = fs.readSync(fd, buf3, 2, 4, 2);
        console.log("third read bytes: " + readByte3);
        console.log("third read content: " + buf3);

    }

});