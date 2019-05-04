//写文件
var filePath = "../files/123.txt";
var fs = require("fs");

if (fs.existsSync(filePath)) {
    var fileContent = fs.readFileSync(filePath, "utf-8");
    console.log("read txt: " + fileContent);

    fs.writeFileSync(filePath, "this is new content by write in");
    var fileContentNew = fs.readFileSync(filePath, "utf-8");
    console.log("after write txt: " + fileContentNew);
} else {
    console.log("file not found");
}
