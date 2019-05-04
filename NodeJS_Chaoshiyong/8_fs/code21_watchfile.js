//监控文件的应用
//fs.watch; fs.watchFile

var filePath = "../files/123.txt";
var fs = require("fs");
fs.watchFile(filePath, (cur, prev) => {
    console.log("cur time: " + cur.mtime);
    console.log("prev time: " + prev.mtime);

    fs.watch(filePath, (event, fileName) => {
        console.log("event: " + event);
        console.log("fileName: " + fileName);
    });
});