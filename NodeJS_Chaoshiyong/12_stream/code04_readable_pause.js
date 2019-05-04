//暂停与恢复可读流
var fs = require("fs");
var rs = fs.createReadStream("../files/123.txt");
rs.setEncoding("utf8");
rs.on("readable", () => {
    console.log("readable event...");
});
rs.on("data", (chunk) => {
    console.log("content length: " + chunk.length);

    //暂停
    rs.pause();
    console.log("数据暂停...");

    setTimeout(() => {
        console.log("数据重新开始流动");
        rs.resume();
        console.log("content: " + chunk);
    }, 3000);
});
