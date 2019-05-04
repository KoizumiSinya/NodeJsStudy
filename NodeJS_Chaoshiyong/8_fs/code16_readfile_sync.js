//读取文件的应用
var filePath = "../files/123.txt";
var fs = require("fs");

if (fs.existsSync(filePath)) {
    var fileContent = fs.readFileSync(filePath, "utf-8");
    console.log("read 123.txt: " + fileContent);
} else {
    console.log("file not found");
}
