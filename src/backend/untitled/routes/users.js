var express = require('express'),
    _       = require('lodash'),
    config  = require('../config/config.json'),
    jwt     = require('jsonwebtoken'),
    User = require('../models/user').User,
    db = require('../modules/db');
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

router.post('/users', async function(req, res) {


    if (!req.body.username || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }
    let user = new User({username: req.body.username, password: req.body.password, role: 'user'});
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
