var mysql = require('mysql');
var http = require("http");

var connection = mysql.createConnection({
    host: 'localhost',//主机名
    user: 'root',//mysql默认用户名
    password: 'root',//数据库密码
    //database: 'mydb',//需要访问的数据库名称
    port: 3306 //mysql默认的端口
});

http.createServer((req, res) => {
    res.writeHeader(200, {"Content-Type": "text/html"});
    connection.connect(function (error) {
        if (error) {
            res.end("<p>Access MySQL is error</p><br/>");
        } else {
            res.end("<p>Access MySQL is success</p><br/>");
        }
    });
}).listen(8989);


// var dbName = "mydb";
// connection.query('create database ' + dbName, (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("创建数据库mydb成功");
//     }
// });