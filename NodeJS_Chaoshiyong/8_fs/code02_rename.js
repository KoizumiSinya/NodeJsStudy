//使用异步的方式 变更文件名称
var fs = require("fs");
fs.rename("../files/abc.txt", "../files/abc.txt", function (err) {
    console.time("fs-rename");
    console.timeEnd("fs-rename");
});
