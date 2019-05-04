var PI = Math.PI;

//圆的面积
exports.area = function (r) {
    return PI * r * r;
};

//圆的周长
exports.circumference = function (r) {
    return 2 * PI * r;
};

//使用export导出，在其他js文件就可以引用