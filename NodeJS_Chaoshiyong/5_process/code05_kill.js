console.log("当前进程id: " + process.pid);

//给process注册一个叫over的监听
process.on("P", function () {
    console.log("P will close");
});

setTimeout(function () {
    console.log("exiting...");
    process.exit(0);
    console.log("the id " + process.pid + " process is over");
},1000);