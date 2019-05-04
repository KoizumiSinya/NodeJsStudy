var fs = require("fs");
var finish = function () {
    console.log("文件读取完毕");
};

process.nextTick(finish);
console.log(fs.readFileSync("./test3.js").toString());

//这里的代码会先执行读取文件test3.js 之后才会打印 "文件读取完毕"
//因此 nextTick可以用来指定两个耗时操作同步进行