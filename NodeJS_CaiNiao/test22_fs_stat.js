var fs = require("fs");
console.log("准备打开文件");
fs.stat("content.txt", function (err, stats) {
    if (err) {
        return console.error(err);
    }

    console.log(stats);
    console.log("读取文件信息成功");

    //检测文件类型
    console.log("是否是文件？：" + stats.isFile());
    console.log("是否是文件夹目录？：" + stats.isDirectory());
})