var fs = require("fs");

console.log("准备删除文件");

fs.unlink("content2.txt", function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("文件删除成功");
})