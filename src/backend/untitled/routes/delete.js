var express = require('express');
var router = express.Router();
var file = require('../src/file');
var ref = require('../modules/roomRefuge');
router.post('/room', async (req, res, next) => {
    console.log('index = ' + req.body.id);
    await ref.remove(req.body.id);
    res.send('deleted')
});
module.exports = router;