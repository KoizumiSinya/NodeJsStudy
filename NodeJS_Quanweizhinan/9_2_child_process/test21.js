process.on("message", function (m) {
    console.log("子线程收到消息:", m);
    process.send({age: 26});
});

