var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
mongoose.Promise = Promise;

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

//变成异步操作
app.post('/messages', async (req, res) => {
    var message = new Message(req.body);
    var saveMessage = await message.save();
    console.log('saved');

    var censored = await  Message.findOne({message: 'Fuck'});
    if (censored) {
        await Message.remove({_id: censored.id});
    } else {
        io.emit('message', req.body);
    }
    res.sendStatus(200);
});

/*app.post('/messages', (req, res) => {
    //把用户点击send发送的name和message提交到服务器
    var messageBean = new Message(req.body);

    messageBean.save() //

        .then(() => {
            console.log('saved new message');

            //保存成功之后，删除限定内容的消息
            return Message.findOne({message: 'Fuck'});
        })

        .then(censored => {

            if (censored) {
                console.log('censored words found: ', censored);
                return Message.remove({_id: censored.id});
            }

            io.emit('message', req.body);
            res.sendStatus(200);
        })

        .catch((err) => {
            //如果保存失败，则说明数据库服务器出错
            res.sendStatus(500);
            return console.error(err);
        });
});*/

io.on('connection', (socket) => {
    console.log('Socket listener...');
});

mongoose.connect(dbUrl, {useNewUrlParser: true}, (err) => {
    console.log('Mongodb connection error: ', err);
});

var server = http.listen(8989, () => {
    console.log('Server is listening on port: ', server.address().port);
});