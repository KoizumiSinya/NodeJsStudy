//这里对比setTimeout与nextTick的效率
console.time("A");
console.log("start-setTimeout");
setTimeout(function () {
    console.log("setTimeout run over");

}, 0);
console.timeEnd("A");

console.time("B");
console.log();
console.log("start-nextTick");
process.nextTick(function () {
    console.log("nextTick run over");
});
console.timeEnd("B");