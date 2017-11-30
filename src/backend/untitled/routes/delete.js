var express = require('express');
var router = express.Router();
var file = require('../src/file');
var ref = require('../modules/roomRefuge');
const requestOptions = require('request-options');
const request = require('request');
var formidable = require('formidable');
var path = require('path');
var cors = require('cors');
router.options('*', cors());

const options = {
    method: 'post',
    url: '/room',
    gzip: false,
    timeout: 20000
};

function responseHandler (err, res, body) {
    // handle request response
}
request(requestOptions(options), responseHandler);

router.post('/room', async (req, res, next) => {
    let index;
    var form = new formidable.IncomingForm(),
        fields = {};
     form
        .on('error', function(err) {
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end('error:\n\n'+util.inspect(err));
            console.error(err);
        })
        .on('field', function(name, value) {
            index = value;
            ref.remove(value);
            res.send('deleted')
        });
    form.parse(req);
});
router.options('/room', async (req, res, next) => {
    console.log('index = ' + req.body.id);
    await ref.remove(req.body.id);
    res.send('deleted')
});
module.exports = router;