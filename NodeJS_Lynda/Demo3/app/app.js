var express = require('express');
var app = express();

var path = require('path');
var localData = require('./data/data.json');

app.set('port', process.env.PORT || 8989);
app.set('localData', localData);//在app身上绑定数据源
app.set('view engine', 'ejs');//告诉express,使用何种布局引擎
app.set('views', 'views');//告诉express, 布局引擎的根布局对应在哪个文件夹下

app.locals.siteTitle = 'Demo3';//也可以在这里注册标记一个value，然后在ejs模板那边获取
app.locals.allSpeakers = localData.speakers;//也可以在这里设置本地数据，绑定给app

app.use(express.static(path.join(__dirname, '/public')));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), () => {
    console.log('the express server listen port: ' + app.get('port'));
});