var express = require('express');
var router = express.Router();
var ref = require('../modules/eventRefuge');
var fs = require('fs');
var path = require('path');
var multer  = require('multer');
var formidable = require('formidable');
var fileWrite = require('../src/file');
var Room = require('../models/event').Event;
var cors = require('cors');
router.options('*', cors());
util = require('util');
/* GET home page. */
router.get('/',async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    var userMap = {};
    await Room.find({}, function(err, users) {

        users.forEach(function(user) {
            userMap[user._id] = user;
        });
        res.json(userMap);
    });
});
router.post('/', async (req, res) => {
    let newRoom = {};
    let index;
    Room
        .find()
        .sort('id')  // give me the max
        .exec(function (err, member) {
            if(err){
                console.log('errorr')
                index = 1
            }
            else {
                index = member[member.length - 1].id
                index++;
            }


        });
    let path = '';
    let array = await ref.getAll();
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
                newRoom.id = index;
                newRoom.img = "https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + uuid;
                await ref.create(newRoom);
                console.log(newRoom);
                console.log('-> post done');
                res.end('received fields:\n\n '+util.inspect(fields));
                return Promise.resolve("https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + uuid);
            });
    };
});
module.exports = router;
