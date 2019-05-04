var counter = require("./code07_counter");
console.log("第一次调用模块");

counter.setOutputValue(10);//设置初始化值为10
counter.setIncrement(10);//设置增量为10

counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();


var counter = require("./code07_counter");
console.log("第二次调用模块");
//实际上多次引用相同的模块，是不会重复加载文件的。所以已经加载的模块会继续产生作用。

counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();

console.log("清零");
counter.setZero();