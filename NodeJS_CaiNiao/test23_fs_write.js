var fs = require("fs");
console.log("准备写入文件");

fs.writeFile("content.txt", "写入的文本内容：好好学习天天向上", function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("数据写入成功");
    console.log("----------");
    console.log("读取写入的数据");

    fs.readFile("content.txt", function (err, data) {

        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据:" + data.toString());
    })
});