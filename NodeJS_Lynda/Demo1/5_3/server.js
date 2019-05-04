var express = require('express');
var app = express();

app.use(express.static(__dirname));

var messages = [
    {name: 'Sinya', message: 'Hello'},
    {name: 'CoCo', message: 'Nice to meet you'}
];

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.post('/messages', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
    //res.send(messages);
});

var server = app.listen(8989, () => {
    console.log('Server is listening on port: ', server.address().port);
});