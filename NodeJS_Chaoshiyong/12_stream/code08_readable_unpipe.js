//解除pipe方法设置的流
var fs = require("fs");
var readable = fs.createReadStream("../files/123.txt");
var writable = fs.createWriteStream("../files/unpipe.txt");

//通过这个可读流，会把123.txt 文件中的东西复刻到 unpipe.txt文件中
readable.pipe(writable);

//通过延迟操作 接触unpipe
setTimeout(() => {
    console.log("停止写入...");
    readable.unpipe(writable);
    console.log("readable close...");
    writable.end();
}, 1);
//停止写入之后，文件unpipe.txt是被创建了，但是里面的内容就不会是完整的