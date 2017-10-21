var express = require('express');
var router = express.Router();
var cors = require('cors');
var file = require('../src/file');
router.options('*', cors());
router.post('/room', async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    file.toFile(req.body);
    res.send('deleted')
});
module.exports = router;