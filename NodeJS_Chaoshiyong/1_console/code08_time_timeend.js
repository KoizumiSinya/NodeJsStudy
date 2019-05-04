var n = 0;

//time() 和 timeEnd() 使用相同的一个任意值的字符参数，表示tag标签，用来计算中间运算程序的耗时
console.time('10000*10000');
for (var i = 0; i < 10000; i++) {
    for (var j = 0; j < 10000; j++) {
        n++;
    }
}

console.log("计算10000 * 10000 的耗时为:");
console.timeEnd("10000*10000");
console.log("10000 * 10000 = %d", n);