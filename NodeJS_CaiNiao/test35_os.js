var os = require("os");

//CPU的字节序
console.log("CPU字节序：" + os.endianness());
console.log("操作系统名：" + os.type());
console.log("操作系统名：" + os.platform());
console.log("全部内存：" + os.totalmem() + "bytes");
console.log("闲置内存：" + os.freemem() + "bytes");

