console.log("当前进程的id：");
console.log(process.pid);
console.log("当前进程的名称：");
console.log(process.title);

console.log("当前nodejs版本号：");
console.log(process.version);
console.log("当前nodejs版本属性：");
console.log(process.versions);
console.log("当前nodejs配置信息：");
console.log(process.config);

console.log("运行当前进程可执行文件的绝对路径：");
console.log(process.execPath);
console.log("当前进程的命令行参数数组：");
console.log(process.argv);

console.log("查看当前系统平台");
console.log(process.platform);

console.log("查看CPU架构");
console.log(process.arch);

console.log("指向当前的shell的环境变量");
console.log(process.env);