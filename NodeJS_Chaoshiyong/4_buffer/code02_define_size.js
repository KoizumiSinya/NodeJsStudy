//定义并初始化Buffer对象
var buffer = new Buffer("this is content", "utf8");
console.log("buffer length: " + buffer.length);
console.log("buffer: " + buffer);

//重新定一个一个Buffer对象
var buffer16 = new Buffer(16);
console.log("buffer length: " + buffer16.length);
console.log("buffer: " + buffer16);//打印出来的是几个空的无法识别的字符串

buffer16.write("new content", 0, "utf8");
console.log("buffer length: " + buffer16.length);
console.log("buffer: " + buffer16);


buffer16.write("-----", 3, "utf8");//这里表示的从哪个位置开始写入，注意，它并不会说顺延插入，而是覆盖插入
console.log("buffer length: " + buffer16.length);
console.log("buffer: " + buffer16);


buffer16.write("abcdefghijklmnopqrstuvwxyz", 0, "utf8");//如果要写入的文本长度超过了初始化的长度，也只能写入指定长度的值
console.log("buffer length: " + buffer16.length);
console.log("buffer: " + buffer16);


buffer16.write("============", 2, 2, "utf8");//表示插入什么字符串，从哪个位置开始，取多少个插入，插入的格式
console.log("buffer length: " + buffer16.length);
console.log("buffer: " + buffer16);