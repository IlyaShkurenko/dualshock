let rooms = [];
let fs = require("fs");
var Room = require('../models/room').Room;

let remove = async(index) => {
    Room.find({ id:index }).remove().exec()

};
let create = async(roomTodb) => {
    console.log('room = ' + roomTodb.img)
    console.log('room id = ' + roomTodb.id)
    let room = new Room(roomTodb);
    room.save(function (err, user, affected) {
        if (err) throw err;
    })

};

let getAll = async(req, res) => {
    Room.find({}, function(err, users) {
        var userMap = {};

        users.forEach(function(user) {
            userMap[user._id] = user;
        });

        res.send(userMap);
    });
};

module.exports = {
    remove,
    create,
    getAll
};