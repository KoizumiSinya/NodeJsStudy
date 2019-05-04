//可写流 drain 事件处理

var fs = require("fs");
var rs = fs.createReadStream("../files/temp/123.jpg");
var ws = fs.createWriteStream("../files/temp/456.jpg");
rs.setEncoding("utf8");
rs.on("data", (chunk) => {
    console.log("readStream data event...");

    //检查 数据时已经写入目标路径文件下，还是仅仅写到缓存中
    if (ws.write(chunk) === false) {
        console.log("data is write in cache...");
        rs.pause();
    }
});

ws.on("drain", () => {
    console.log("writeStream drain event...");
    rs.resume();
});

rs.on("end", () => {
    console.log("readStream end event...");
    ws.end();
});


/*
使用fs.pause() 方法暂停可读流，并触发drain事件，这样的方式有效地避免了缓存溢出的问题


 */