var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var helloworld = require('./routes/helloworld');
var register = require('./routes/register');
var login = require('./routes/login');
var ajax = require('./routes/ajax');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//启动的文件是 bin 下的www 也可以使用 npm start启动这个demo项目
//访问主页，在浏览器输入 127.0.0.1:8989
//访问Hello World，在浏览器输入 127.0.0.1:8989/helloworld

app.use('/', index);
app.use('/users', users);

//学习加入一个静态的helloworld界面
app.use('/helloworld', helloworld);

//学习模拟一个登陆界面
app.use('/register', register);
app.post('/login', login);

//学习Ajax方式操作
app.use('/ajax', ajax);
app.get('/jsonp', (req, res, next) => {
    res.jsonp({status: 'status:jsonp'});
});
app.get('/json', (req, res, next) => {
    res.send({status: 'status:json'});
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
