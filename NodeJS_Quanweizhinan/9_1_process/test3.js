function foo() {
    console.log("foo");
}

//使用timeout 指定函数的运行时刻
setTimeout(foo, 0);
console.log("bar");

