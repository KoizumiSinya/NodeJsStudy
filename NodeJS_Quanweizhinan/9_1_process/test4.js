function foo() {
    console.log("foo");
}

//nextTick 函数也是延迟调用，但是比setTimeout方法调用的速度快很多
process.nextTick(foo);
console.log("bar");