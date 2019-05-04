var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//使用mongoose的在线mLab服务器连接
var dbUrl = 'mongodb://sinya:haoqqjy123@ds141952.mlab.com:41952/nodetest';

//创建一个类似数据库Bean的结构类
var Message = mongoose.model('Message', {
    name: String,
    message: String
});

app.get('/messages', (req, res) => {
    //改成由mLab在线数据库查找获取数据
    Message.find({}, (err, messages) => {
        res.send(messages);
    });
});

app.post('/messages', (req, res) => {
    //把用户点击send发送的name和message提交到服务器
    var messageBean = new Message(req.body);
    messageBean.save((err) => {
        if (err) {
            //如果保存失败，则说明数据库服务器出错
            res.sendStatus(500);
        } else {
            //保存成功的话，服务器回调正常，则通过代码出发io的消息监听，使其去访问数据库对应的那条数据
            io.emit('message', req.body);
            res.sendStatus(200);
        }
    });

});

io.on('connection', (socket) => {
    console.log('socket listener...');
});

mongoose.connect(dbUrl, {useNewUrlParser: true}, (err) => {
    console.log('mongo db connection error: ', err);
});

var server = http.listen(8989, () => {
    console.log('Server is listening on port: ', server.address().port);
});