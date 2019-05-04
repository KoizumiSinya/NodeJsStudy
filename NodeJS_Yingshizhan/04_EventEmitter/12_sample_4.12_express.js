/**
 * 在使用Express框架的时候，需要先安装其到依赖列表中。
 * ① 执行 cnpm install express --save 通常会把它安装到当前目录的node_modules文件夹下，并在这个目录下创建express目录
 * ② body-parser 中间件，用于处理JSON，Raw，Text和URL编码的数据
 * ③ cookie-parser Cookie工具
 * ④ multer 用于处理enctype="multipart/form-data" 表单数据
 * @type {*|createApplication}
 *
 */

var express = require('express');
var app = express();

app.on('hello-alert', function () {
    console.warn('Warning...');
});
app.get('/', function (req, res) {
    res.app.emit('hello-alert');
    res.send('hello world');
});