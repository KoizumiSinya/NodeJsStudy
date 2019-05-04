console.log("Main Start");

console.log("Async Start");


// try {
//     setTimeout(function () {
//         //由于这句代码执行是会报错的，但是因为async在执行之后异步计算，导致try/catch语句是无法捕获到错误的。直接在控制台打印错误
//         var data = 100 / 0;
//     }, 3000);
// } catch (error) {
//     console.log("catch the error")
// }


setTimeout(function () {
    try {
        //因此需要把try/catch语句放到异步中去执行
        var data = 100 / 0;
    } catch (error) {
        console.log("catch the error")
    }
}, 3000);


console.log("Main End");