var buffer = new Buffer("nodejs", "utf8");
if (Buffer.isBuffer(buffer)) {
    console.log("is buffer");
} else {
    console.log(("no buffer"));
}

var str = "nodejs";
if (Buffer.isBuffer(str)) {
    console.log("is buffer");
} else {
    console.log(("no buffer"));
}