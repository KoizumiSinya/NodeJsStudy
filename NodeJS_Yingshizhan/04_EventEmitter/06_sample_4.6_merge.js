//使用util.merge的方式多继承
exports.merge = function (a, b) {
    if (a && b) {
        for (var key in b) {
            a[key] = b[key];
        }
    }
    return a;
};