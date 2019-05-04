//可读流错误事件处理
var fs = require("fs");
//故意设置一个不存在路径的文件来读取，使error事件监听响应
var rs = fs.createReadStream("../files/111.txt");
rs.on("readable", () => {
    console.log("readable event...");
});
rs.on("error", () => {
    console.log("error event...");
});
