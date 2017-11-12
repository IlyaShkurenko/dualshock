let rooms = [];
let fs = require("fs");
var Room = require('../models/room').Room;

let readFromFile = function(fileName) {
    let json = fs.readFileSync(fileName, 'utf8');
    return json;
};
let refuge = async() => {
    let json = readFromFile('rooms.json');
    return JSON.parse(json);
};


module.exports = {
    refuge,
};
let array = [];
let init = async() => {
    array = await refuge();
};
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


let update = async(room, id) => {
    let index = await find(id);
    array[index] = room;
    await toJson(array);
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

let getById = async(index) => {
    return array[index];
};
let toJson = async(array) => {
    json.arrayToJson(array);
};
init();
let find = async(id) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            return i;
        }
    }
};
module.exports = {
    remove,
    create,
    update,
    getAll,
    getById,
    refuge
};