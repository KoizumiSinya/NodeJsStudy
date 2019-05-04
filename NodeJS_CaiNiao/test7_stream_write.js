var fs = require("fs");
var data = "世界上最远的距离不是生与死，而是我在学习你却不学习";

//创建一个可以写入的流 然后把内容写到output.txt文件中
var writeStream = fs.createWriteStream("output.txt");

//使用utf8格式写入
writeStream.write(data, "UTF8");

//标记文件末尾
writeStream.end();

//处理流事件
writeStream.on("finish", function () {
    console.log("写入完成");
});
writeStream.on("error", function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");