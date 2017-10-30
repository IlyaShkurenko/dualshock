var express = require('express');
var router = express.Router();
var ref = require('refuge');
var fs = require('fs');
var path = require('path');
var multer  = require('multer');
var formidable = require('formidable');
var fileWrite = require('../src/file');
var cors = require('cors');
router.options('*', cors());
    util = require('util');
/* GET home page. */
router.get('/',async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    let rooms = await ref.getAll();
    res.json(rooms);
});
router.post('/', async (req, res) => {
    let newRoom = {};
    let path = '';
    let array = await ref.refuge();
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
                path = downloadURL;
                console.log(downloadURL);
            });
            console.log(field,value);
            fields[field] = value;
        })
        .on('field', function(name, value) {
            if(name === 'games'){
                let gamesArray = value.split(',')
                newRoom['games'] = gamesArray;
            }
            else {
                newRoom[name] = value;
            }
        })
        .on('end', function() {
            res.writeHead(200, {'content-type': 'text/plain'});
        });
    form.parse(req);
    //send image to firebase
    const gcs = require('@google-cloud/storage')({keyFilename: fbKeyFile});
    const bucket = gcs.bucket(`${fbId}.appspot.com`);
    var upload = async (localFile, remoteFile) => {
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
            .then(async (data) => {

                let file = data[0];
                newRoom.img = "https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + uuid;
                await ref.create(newRoom);
                console.log('-> post done');
                res.end('received fields:\n\n '+util.inspect(fields));
                return Promise.resolve("https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + uuid);
            });
    };
});
module.exports = router;
