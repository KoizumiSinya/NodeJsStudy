console.log("Main Start");

console.log("Async Start");
setTimeout(function () {
    console.log("Async Over");
}, 3000);
console.log("Main End");

//setTimeOut会在主程序结束之后才打印异步的结果