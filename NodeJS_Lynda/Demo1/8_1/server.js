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
    try {
        throw  'the network error...';

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
    } catch (error) {
        res.sendStatus(500);
        return console.err(error);
    }finally {

    }

});

io.on('connection', (socket) => {
    console.log('Socket listener...');
});

mongoose.connect(dbUrl, {useNewUrlParser: true}, (err) => {
    console.log('Mongodb connection error: ', err);
});

var server = http.listen(8989, () => {
    console.log('Server is listening on port: ', server.address().port);
});