var fs = require("fs");
console.log("查看 ./ 当前目录");
fs.readdir("./", function (err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function (t) {
        console.log(t);
    })
});