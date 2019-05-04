var path = require("path");

//格式化路径
console.log("格式化路径：" + path.normalize("./"));

//连接路径
console.log("连接路径：" + path.join("/test", "child", "child2"));

//转换绝对路径
console.log("转换绝对路径：" + path.resolve("hello.js"));
console.log("转换绝对路径：" + path.resolve("./"));
//获取这个文件所在的文件夹目录
console.log("文件夹目录：" + path.dirname("hello.js"));

//路径中文件的后缀名
console.log("后缀名：" + path.extname("hello.js"));