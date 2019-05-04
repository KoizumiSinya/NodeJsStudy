buf = new Buffer(256);
len = buf.write("wwww.baidu.com");
console.log("写入的字节数:" + len);

buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));//输出 abcd...
console.log(buf.toString('ascii', 0, 5));//输出 abcde
console.log(buf.toString('utf8', 0, 5));//输出 abcde
console.log(buf.toString(undefined, 0, 5));//使用utf8编码 并输出abcde


//buffer转换json对象
var buf = new Buffer('www.baidu.com');
var json = buf.toJSON(buf);
console.log(json);


//缓冲区合并
var buf1 = new Buffer('菜鸟教程');
var buf2 = new Buffer('www.baidu.com');
var buf3 = Buffer.concat([buf1, buf2]);
console.log('buffer3的内容:' + buf3.toString());

//缓冲区比较
var buf4 = new Buffer('ABC');
var buf5 = new Buffer('ABCD');
var result = buf4.compare(buf5);
if (result < 0) {
    console.log(buf4 + "在" + buf5 + "之前");
} else if (result == 0) {
    console.log(buf4 + "与" + buf5 + "相同");
} else {
    console.log(buf4 + "在" + buf5 + "之后");
}

//缓冲区拷贝
var buf6 = new Buffer('ABC');
var buf7 = new Buffer(3);
buf6.copy(buf7);
console.log("buf7 content:" + buf7.toString());

//缓冲区剪裁
var buf8 = new Buffer('runoob');
var buf9 = buf8.slice(0, 2);
console.log("buf9 content:" + buf9.toString());

//缓冲区的长度
var buf10 = new Buffer('www.baidu.com');
console.log("buf10 content length:" + buf10.length);