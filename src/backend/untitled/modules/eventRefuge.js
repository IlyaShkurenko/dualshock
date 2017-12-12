let rooms = [];
let fs = require("fs");
var Room = require('../models/event').Event;

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

let getAll = async() => {
    let roomMap = {};
    await Room.find({},function(err, rooms) {

        rooms.forEach(function(room) {
            roomMap[room._id] = room;
        });
    });
    return roomMap
};

module.exports = {
    remove,
    create,
    getAll
};