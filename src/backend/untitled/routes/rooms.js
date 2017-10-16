var express = require('express');
var router = express.Router();
var ref = require('refuge');
var fs = require('fs');
var path = require('path');
var multer  = require('multer');
var formidable = require('formidable'),
    util = require('util');
/* GET home page. */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage });
router.get('/',async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    let rooms = await ref.getAll();
    res.json(rooms);
});
router.post('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
   /* req.on('data', (data) => {
       console.log(data.toString())
    });

    return res.json('success');*/
    var form = new formidable.IncomingForm(),
        fields = {};
    form
        .on('error', function(err) {
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end('error:\n\n'+util.inspect(err));
            console.error(err);
        })
        .on('file', function(field, value) {
            console.log(field,value);
            fields[field] = value;
        })
        .on('end', function() {
            console.log('-> post done');
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('received fields:\n\n '+util.inspect(fields));
        });
    form.parse(req);
});
/*router.post('/', upload.single('image'), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    console.log(req.body);
    return res.json('success');
});*/
module.exports = router;
/*var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
    fs.readFile('/Users/illiashkurenko/WebstormProjects/untitled/routes/index.html', function (err, data) {
        if(err) throw err;
        res.end(data);
    })
});
module.exports = router;
*/