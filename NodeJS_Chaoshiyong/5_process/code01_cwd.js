//打印当前进程 结果是一串文件夹路径的绝对路径
console.log("current process: " + process.cwd());

console.log("change directory: /Users/koizumisinya/Desktop/WorkSpace/WebSpace");
process.chdir("/Users/koizumisinya/Desktop/WorkSpace/WebSpace");
console.log("change process: " + process.cwd());

