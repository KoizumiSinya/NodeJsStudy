//可读流 finish事件处理
var fs = require("fs");
var rs = fs.createReadStream("../files/123.txt");
var ws = fs.createWriteStream("../files/111.txt");
rs.setEncoding("utf8");

rs.on("data", (chunk) => {
    console.log("readStream data event...");
    if (ws.write(chunk) === false) {
        console.log("data is write in cache...");
        rs.pause();
    }
});

ws.on("drain", () => {
    console.log("writeStream drain event...");
    rs.resume();
});

ws.on("finish", () => {
    console.log("writeStream finish event...");
});

rs.on("end", () => {
    console.log("readStream end event...");
    ws.end();
});
