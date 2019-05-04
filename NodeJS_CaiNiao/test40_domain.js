var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

var emitter1 = new EventEmitter();

//创建domain域
var domain1 = domain.create();
domain1.on("error", function (err) {
    console.log("domain1 处理这个错误：" + err.message);
});
//显式绑定
domain1.add(emitter1);
//监听器处理的错误
emitter1.on("error", function (err) {
    console.log("监听器处理错误：" + err.message);
});
emitter1.emit("error", new Error("通过监听器处理"));
emitter1.removeAllListeners("error");
emitter1.emit("error", new Error("通过domain1处理"));

var domain2 = domain.create();
domain2.on("error", function (err) {
    console.log("domain2 处理这个错误：" + err.message);
});
//隐式绑定
domain2.run(function () {
    var emitter2 = new EventEmitter();
    emitter2.emit("error", new Error("通过domain2处理"));
});

//移除掉domain处理的话，就会归还给系统处理
domain1.remove(emitter1);
emitter1.emit("error", new Error("转换为异常，系统崩溃"));
