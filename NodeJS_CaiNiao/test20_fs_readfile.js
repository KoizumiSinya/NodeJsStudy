var fs = require("fs");
fs.readFile("content.txt", function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取：" + data.toString());
});

var data = fs.readFileSync("content.txt");
console.log("同步读取：" + data.toString());
console.log("程序结束");
