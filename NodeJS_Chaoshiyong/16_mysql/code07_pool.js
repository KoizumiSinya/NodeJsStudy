var mysql = require('mysql');
var http = require("http");

var config = {
    host: 'localhost',//主机名
    user: 'root',//mysql默认用户名
    password: 'qqjy',//数据库密码
    database: 'nodejs_db',//需要访问的数据库名称
    port: 3306 //mysql默认的端口
};
var poolConfig = {
    host: 'localhost',//主机名
    user: 'root',//mysql默认用户名
    password: 'qqjy',//数据库密码
    database: 'nodejs_db',//需要访问的数据库名称
};

var connection = mysql.createConnection(config);
var pool = mysql.createPool(poolConfig);

http.createServer((req, res) => {

    // connection.connect(function (error) {
    //     if (error) {
    //         res.write("<p>Access MySQL is error</p><br/>");
    //     } else {
    //         res.write("<p>Access MySQL is success</p><br/>");
    //     }
    // });

    pool.getConnection((err, conn) => {
        if (err) {
            throw err;
        }

        var selectSQL = "select * from student";
        conn.query(selectSQL, (err, rows) => {
            if (err) {
                throw err;
            }

            res.writeHeader(200, {"Content-Type": "text/html"});

            //释放数据库连接
            conn.release();
            res.end(JSON.stringify(rows));
        })
    });
}).listen(8988);