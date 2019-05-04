var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    var data = req.app.get('localData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

    data.speakers.forEach((item) => {
        pagePhotos = pagePhotos.concat(item.artwork);
    });
    res.render('index', {
            pageTitle: 'Home',
            pageID: 'home',
            artwork: pagePhotos,
            speakers: pageSpeakers,
        }
    );
});

module.exports = router;