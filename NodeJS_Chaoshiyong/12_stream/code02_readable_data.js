//使用data事件读取文件
var fs = require("fs");
var rs = fs.createReadStream("../files/123.txt");
rs.setEncoding("utf8");
rs.on("readable", () => {
    console.log("readable event...");
});
rs.on("data", (chunk) => {
    console.log("读取 ../files/123.txt 文件内容: " + chunk);
    console.log("读取 ../files/123.txt 文件字节数: " + chunk.length);
});