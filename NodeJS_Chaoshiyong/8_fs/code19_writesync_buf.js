//功能增强的写文件应用
//fs.write; fs.writeSync

var filePath = "../files/123.txt";
var fs = require("fs");
fs.open(filePath, "r+", (err, fd) => {
    if (err) {
        console.log("err: " + err);
    } else {
        var fileContent = fs.readFileSync(filePath, "utf-8");
        console.log("read txt: " + fileContent);

        //准备写入新的内容
        var buf = new Buffer("1234567");
        var len_buf = fs.writeSync(fd, buf, 0, buf.length, 0);
        console.log("写入的字节数: " + len_buf);

        var fileContentNew = fs.readFileSync(filePath, "utf-8");
        console.log("read txt after write: " + fileContentNew);
    }

});