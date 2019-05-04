//使用nodej连接mysql，并创建一个数据库

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',//主机名
    user: 'root',//mysql默认用户名
    password: 'qqjy',//数据库密码
    port: 3306 //mysql默认的端口
});

connection.connect(function (error) {
    if (error) {
        console.log("Access MySQL is error");
    } else {
        console.log("Access MySQL is success");
    }
});

var dbName = "nodejs_db";
connection.query('create database ' + dbName, (err) => {
    if (err) {
        throw err;
    } else {
        console.log("创建数据库 nodejs_db 成功");
    }
});