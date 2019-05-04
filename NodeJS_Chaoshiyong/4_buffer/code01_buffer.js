//定义并初始化一个Buffer对象
var buffer16 = new Buffer([0x6e, 0x6f, 0x64, 0x65, 0x6a, 0x73]);
console.log("buffer length: " + buffer16.length);
console.log("buffer: " + buffer16);//由于这几个字符串正好就是16进制的 nodejs字符串，所以在utf8默认格式下打印出来，就是nodejs

//使用下标读取Buffer对象
for (var i = 0; i < buffer16.length; i++) {
    console.log("buffer[" + i + "]: " + buffer16[i]);
    console.log("buffer[" + i + "].toString: " + buffer16[i].toString());
}

//尝试使用编码格式来打印buffer
console.log(buffer16.toString("utf-8"));
console.log(buffer16.toString("hex"));
console.log();


var bufferUTF8 = new Buffer("nodejs", "utf8");
console.log("buffer length: " + bufferUTF8.length);
console.log("buffer: " + bufferUTF8);

for (var i = 0; i < bufferUTF8.length; i++) {
    console.log("buffer[" + i + "]: " + bufferUTF8[i]);
    console.log("buffer[" + i + "].toString: " + bufferUTF8[i].toString());
}
console.log(bufferUTF8.toString("utf-8"));
console.log(bufferUTF8.toString("hex"));
console.log();

