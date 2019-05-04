process.on("message", function (msg) {
    console.log("process get message is: %j ", msg);
});
process.send({sub: "main"});//发送消息