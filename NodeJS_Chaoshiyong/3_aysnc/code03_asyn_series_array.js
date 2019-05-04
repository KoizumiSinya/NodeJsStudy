//async流程控制库提供了简单而强大的异步功能。一共有约20个函数。
//比较常用的函数式 map/reduce/filter/forEach ；
//异步流程控制模式包括串行(series)/ 并行(parallel)/ 瀑布(waterfall)


//串行流程，就是指串行执行一个函数数组中的每一个函数，并且需要每一个函数执行完成之后，才能执行下一个函数
console.log("main start");
var async = require("async");
async.series([
    function (callback) {
        callback(null, "hello");
    }, function (callback) {
        callback(null, "world");
    }, function (callback) {
        callback(null, "!");
    }
], function (err, result) {
    console.log(result);
});
console.log("main end");
