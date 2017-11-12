var express = require('express');
var router = express.Router();
var cors = require('cors');
var file = require('../src/file');
var ref = require('../modules/roomRefuge');
router.options('*', cors());
router.get('/', async (req, res, next) => {
    res.render('index')
});
module.exports = router;