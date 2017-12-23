let rooms = [];
let fs = require("fs");
var Room = require('../models/event').Event;

let remove = async(index) => {
    console.log('index = ', index)
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
let getById = async(index) =>{
    let isThere = {}
    await Room.findOne({id: index}, function (err, room) {
        isThere = room
    });
    return isThere
}
let getAll = async() => {
    return Room.find({})
};

module.exports = {
    remove,
    create,
    getAll,
    getById
};