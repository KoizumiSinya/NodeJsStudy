var mysql = require('mysql');
var http = require("http");

var connection = mysql.createConnection({
    host: 'localhost',//主机名
    user: 'root',//mysql默认用户名
    password: 'qqjy',//数据库密码
    database: 'nodejs_db',//需要访问的数据库名称
    port: 3306 //mysql默认的端口
});

connection.connect(function (error) {
    if (error) {
        console.log("访问数据库nodejs_db失败");
    } else {
        console.log("访问数据库nodejs_db成功");
    }
});
var dbName = "student";//需要预先在mysql数据库中创建
connection.query('insert into ' + dbName + "(name, sex, age) values ('qqjy','f', 10);", (err, res) => {
    if (err) {
        throw err;
    }

    console.log(res);
});