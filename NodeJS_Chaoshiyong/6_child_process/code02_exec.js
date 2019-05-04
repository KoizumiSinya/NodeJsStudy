var exec = require("child_process").exec;

//调用系统的命令cat 来查看一个js文件
var child = exec("cat code02_exec.js", function (error, stdout, stderr) {
    console.log("cat code02_exec.js stdout: ");
    console.log(stdout);
});

//spawn与exec的区别
//1.spawn方法的参数必须放到arg数组参数中，所有参数不能带有空格
//2.exec可以直接把参数放在command参数里面
//3.spawn是 异步中的异步
//4.exec是同步中的异步