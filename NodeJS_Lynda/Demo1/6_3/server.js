var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var dbUrl = 'mongodb://sinya:haoqqjy123@ds141952.mlab.com:41952/nodetest';

var messages = [
    {name: 'Sinya', message: 'Hello'},
    {name: 'CoCo', message: 'Nice to meet you'}
];

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.post('/messages', (req, res) => {
    //使用PostMan,编写一个Json格式的bean，使用post提交到 http://127.0.0.1:9898/messages，这里能够打印出来
    //console.log(req.body);
    messages.push(req.body);
    io.emit('message', req.body);
    res.sendStatus(200);
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