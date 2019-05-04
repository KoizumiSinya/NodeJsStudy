var str_read_UInt8 = "";
var str_read_Int8 = "";

var str_read_UInt16LE = "";
var str_read_Int16LE = "";

var str_read_UInt16BE = "";
var str_read_Int16BE = "";

var buf = new Buffer(4);
buf[0] = 0x6;
buf[1] = 0x8;
buf[2] = 0x23;
buf[3] = 0x57;

str_read_UInt8 += "str_read_UInt8: ";
for (var i = 0; i < buf.length; i++) {
    str_read_UInt8 += buf.readUInt8(i).toString(16) + " ";
}
console.log(str_read_UInt8);//6 8 23 57
console.log();


str_read_Int8 += "str_read_Int8: ";
for (var i = 0; i < buf.length; i++) {
    str_read_Int8 += buf.readInt8(i).toString(16) + " ";
}
console.log(str_read_Int8);//6 8 23 57
console.log();


str_read_UInt16LE += "str_read_UInt16LE: ";
for (var i = 0; i < buf.length - 1; i++) {
    str_read_UInt16LE += buf.readUInt16LE(i).toString(16) + " ";
}
console.log(str_read_UInt16LE);
console.log();


str_read_Int16LE += "str_read_Int16LE: ";
for (var i = 0; i < buf.length - 1; i++) {
    str_read_Int16LE += buf.readInt16LE(i).toString(16) + " ";
}
console.log(str_read_Int16LE);
console.log();


str_read_UInt16BE += "str_read_UInt16BE: ";
for (var i = 0; i < buf.length - 1; i++) {
    str_read_UInt16BE += buf.readUInt16BE(i).toString(16) + " ";
}
console.log(str_read_UInt16BE);
console.log();

str_read_Int16BE += "str_read_Int16BE: ";
for (var i = 0; i < buf.length - 1; i++) {
    str_read_Int16BE += buf.readInt16BE(i).toString(16) + " ";
}
console.log(str_read_Int16BE);//
console.log();




