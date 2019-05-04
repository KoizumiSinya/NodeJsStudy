var express = require('express');
var router = express.Router();

//请求url: http://127.0.0.1:8989/speakers
router.get('/speakers', (req, res) => {
    var data = req.app.get('localData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

    data.speakers.forEach((item) => {
        pagePhotos = pagePhotos.concat(item.artwork);
    });
    res.render('speakers', {
            pageTitle: 'Speakers',
            pageID: 'speakerList',
            artwork: pagePhotos,
            speakers: pageSpeakers,
        }
    );
});

//请求url: http://127.0.0.1:8989/speakers/1
router.get('/speakers/:speakerId', (req, res) => {
    var data = req.app.get('localData');
    var pagePhotos = [];
    var pageSpeakers = [];

    data.speakers.forEach((item) => {
        if (item.shortname == req.params.speakerId) {
            pageSpeakers.push(item);
            pagePhotos = pagePhotos.concat(item.artwork);
        }
    });
    res.render('speakers', {
            pageTitle: 'Speakers Info',
            pageID: 'speakerDetail',
            artwork: pagePhotos,
            speakers: pageSpeakers,
        }
    );
});
module.exports = router;