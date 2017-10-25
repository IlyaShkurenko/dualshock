var express = require('express');
var router = express.Router();

/* GET users listing. */

var User = require('../models/room').User;
router.get('/',function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    console.log(req);
    res.end();
});

module.exports = router;
