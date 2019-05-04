var mysql = require("mysql");
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

connection.query("select * from student;", (error, rows, fields) => {
    console.log(JSON.stringify(rows));
});