var express = require('express');
var router = express.Router();
var ref = require('refuge');
var fs = require('fs');
/* GET home page. */
router.get('/',async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.sendFile('index.html');
    console.log("yes");
});
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