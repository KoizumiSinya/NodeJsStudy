//追加写入文件
var filePath = "../files/123.txt";
var fs = require("fs");

if (fs.existsSync(filePath)) {
    var fileContent = fs.readFileSync(filePath, "utf-8");
    console.log("txt content: " + fileContent);

    fs.writeFileSync(filePath, "this is new content");
    var fileContentNew = fs.readFileSync(filePath, "utf-8");
    console.log("txt content after write: " + fileContentNew);

    fs.appendFileSync(filePath, "---this is append content");
    var fileContentAppend = fs.readFileSync(filePath, "utf-8");
    console.log("txt content after append: " + fileContentAppend);


} else {
    console.log("file not found");
}