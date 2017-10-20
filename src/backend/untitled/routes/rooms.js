var express = require('express');
var router = express.Router();
var ref = require('refuge');
var fs = require('fs');
var path = require('path');
var multer  = require('multer');
var formidable = require('formidable');
var cors = require('cors')
router.options('*', cors());
    util = require('util');
/* GET home page. */
router.get('/',async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    let rooms = await ref.refuge();
    res.json(rooms);
});
router.post('/', (req, res) => {
    const UUID = require("uuid-v4");
    const fbId = "vue-app-75351";
    const fbKeyFile = "vue-app-75351-firebase-adminsdk-9pkad-49d805f90e.json";
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    //parse form
    var form = new formidable.IncomingForm(),
        fields = {};
    form
        .on('error', function(err) {
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end('error:\n\n'+util.inspect(err));
            console.error(err);
        })
        .on('file', function(field, value) {
            upload(value.path, value.name).then( downloadURL => {
                console.log(downloadURL);
            });
            console.log('path = ----' + path)
            console.log(field,value);
            fields[field] = value;
        })
        .on('field', function(name, value) {
            console.log(name,value);
            fields[name] = value;
        })
        .on('end', function() {
            console.log('-> post done');
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('received fields:\n\n '+util.inspect(fields));
        });
    form.parse(req);
    //send image to firebase
    const gcs = require('@google-cloud/storage')({keyFilename: fbKeyFile});
    const bucket = gcs.bucket(`${fbId}.appspot.com`);
    var upload = (localFile, remoteFile) => {
        console.log('path ------- ' + path);
        let uuid = UUID();

        return bucket.upload(localFile, {
            destination: remoteFile,
            uploadType: "media",
            metadata: {
                metadata: {
                    contentType: 'image/png',
                    firebaseStorageDownloadTokens: uuid
                }
            }
        })
            .then((data) => {

                let file = data[0];

                return Promise.resolve("https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + uuid);
            });
    };
});
module.exports = router;
