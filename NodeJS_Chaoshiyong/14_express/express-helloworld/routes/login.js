var express = require("express");
var router = express.Router();

router.post('/login', (req, res, next) => {
    res.render('login', {
        title: 'Welcome to Hello World',
        userid: req.body.userid,
        pwd: req.body.pwd
    });
});

module.exports = router;
