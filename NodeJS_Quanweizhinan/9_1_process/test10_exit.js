process.on("exit", function () {
    console.log("nodejs 进程被退出");
});
process.exit();