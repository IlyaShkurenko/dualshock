var express = require('express'),
    _       = require('lodash'),
    config  = require('../config/config.json'),
    jwt     = require('jsonwebtoken'),
    User = require('../models/user').User,
    db = require('../modules/usersRefuge');

var router = express.Router();
var formidable = require('formidable');
// XXX: This should be a database of users :).
var users = [{
    id: 1,
    username: 'gonto',
    password: 'gonto'
}];

function createIdToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}

function createAccessToken() {
    return jwt.sign({
        iss: config.issuer,
        aud: config.audience,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        scope: 'full_access',
        sub: "lalaland|gonto",
        jti: genJti(), // unique identifier for the token
        alg: 'HS256'
    }, config.secret);
}

// Generate Unique Identifier for the access token
function genJti() {
    let jti = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 16; i++) {
        jti += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return jti;
}

function getUserScheme(req) {

    var username;
    var type;
    var userSearch = {};

    // The POST contains a username and not an email
    if(req.body.username) {
        username = req.body.username;
        type = 'username';
        userSearch = { username: username };
    }
    // The POST contains an email and not an username
    else if(req.body.email) {
        username = req.body.email;
        type = 'email';
        userSearch = { email: username };
    }

    return {
        username: username,
        type: type,
        userSearch: userSearch
    }
}

router.get('/users',async function (req, res, next) {

    let users = await db.getAll();
    res.json(users);
});

router.post('/users', async function(req, res) {
    console.log(req.body)
    let role = 'admin';

    if (!req.body.username || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }
    if(req.body.username !== 'dominolex14@gmail.com'){
        role = 'user'
    }
    let user = new User({username: req.body.username, password: req.body.password, role: role, name: req.body.name, nickname: req.body.nickname, img: '//binarybeast.com/img/avatar/200.png'});
    let registeredUser = await db.getUserByLoginAndPass(user.username, user.hashedPassword);
    if (registeredUser) {
        return res.status(400).send("A user with that username already exists");
    }

    /*var profile = _.pick(req.body, userScheme.type, 'password', 'extra');
    profile.id = _.max(users, 'id').id + 1;

    users.push(profile);*/
    db.create(user);
    let jwt = {
        id_token: createIdToken(user.toArray),
        access_token: createAccessToken(),
        role: user.role,
        username: user.username
    };
    res.status(201);
    res.json(jwt)
});
router.post('/users/update', async (req, res) => {
    let newRoom = {};
    let fileUploaded = false;
    let index;
    let path = '';
    const UUID = require("uuid-v4");
    const fbId = "vue-app-75351";
    const fbKeyFile = "vue-app-75351-firebase-adminsdk-9pkad-49d805f90e.json";
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
            console.log(field,value)
            if(value.size > 0){
                fileUploaded = true;
                fields[field] = value;
            }
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
                if(fileUploaded){
                    newRoom.img = "https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + uuid;
                }
                User.findOne({username: newRoom.email}, function (err, room) {
                    if (!room) {
                        let error = {
                            status: 404,
                            message: 'Incorrect id'
                        }
                        res.json(error)
                    }
                    else {
                        console.log(room)
                        for (let prop in newRoom) {
                            if ((prop !== '_id' || prop !== '__v') && newRoom[prop].length > 0) {
                                room[prop] = newRoom[prop];
                                console.log(prop,newRoom[prop])
                            }
                        }
                        room.save(function (err, updatedTank) {
                            if (err) throw err;
                            res.json(updatedTank);
                        });
                        console.log('-> post done');
                    }
                    console.log(room)
                });
                return Promise.resolve("https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + uuid);
            });
    };
});
router.post('/users/reset', async (req, res) => {
    let newRoom = {};
    //parse form
    var form = new formidable.IncomingForm(),
        fields = {};
    await form
        .on('error', function(err) {
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end('error:\n\n'+util.inspect(err));
            console.error(err);
        })
        .on('field', function(name, value) {
                newRoom[name] = value;
        })
        .on('end', function () {
            User.findOne({username: newRoom.username}, function (err, room) {
                console.log('before = ' + room.hashedPassword)
                if (room) {
                    room.hashedPassword = room.encryptPassword(newRoom.password)
                    console.log('after = ' + room.hashedPassword)
                    room.save(function (err, updatedTank) {
                        if (err) throw err;
                    });
                }
            });
        })
    form.parse(req);
    res.end()
    //send image to firebase
});
router.post('/sessions/create', async function(req, res) {
    console.log(req.body.username, req.body.password);
    //await create({username: 'dominolex14@gmail.com', password: 'firaxis1998', role: 'admin'});
    /*User.remove({}, function(err, row) {
        if (err) {
            console.log("Collection couldn't be removed" + err);
            return;
        }

        console.log("collection removed");
    })*/
   /* User.find({}, function(err, rooms) {
        var userMap = {};

        rooms.forEach(function(user) {
            userMap[user._id] = user;
        });
        console.log(userMap);
    });*/

    let user = new User({username: req.body.username, password: req.body.password, role: ''});
    let registeredUser = await db.getUserByLoginAndPass(user.username, user.hashedPassword);
    if (!registeredUser) {
        return res.status(401).send("The username or password don't match");
    }
    let jwt = {
        id_token: createIdToken(registeredUser.toArray),
        access_token: createAccessToken(),
        role: registeredUser.role,
        username: registeredUser.username
    };
    res.status(201);
    res.json(jwt)
});
module.exports = router;
