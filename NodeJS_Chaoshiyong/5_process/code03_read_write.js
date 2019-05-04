//console.log()实质上也是底层调用process.stdout.write()
console.log("NodeJs");
process.stdout.write("NodeJs");
console.log();

//下面模拟读取一个不存在的文件，会报错。然后通过stderr来输出打印错误日志
var fs = require("fs");
var file = "err.txt";
var encoding = "utf-8";
fs.readFile(file, encoding, function (err, data) {
    if (err) {
        //使用timeout目的是不让打印方式变成标准的错误流
        setTimeout(function () {
            process.stderr.write("no have this file and read err");
        }, 1000);
    } else {
        console.log(data);
    }
});


