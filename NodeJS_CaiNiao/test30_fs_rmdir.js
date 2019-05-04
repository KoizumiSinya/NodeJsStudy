var fs = require("fs");
console.log("准备删除目录 ./file");

fs.rmdir("./file", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("读取./file/目录");
    fs.readdir("./file/", function (err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(function (t) {
            console.log(t);
        })
    })
});
