let rooms = [];
let fs = require("fs");
var Reserve = require('../models/tournament').Tournament;

let remove = async(index) => {
    Reserve.find({ number:index }).remove().exec()

};
let create = async(roomTodb) => {
    let room = new Reserve(roomTodb);
    room.save(function (err, user, affected) {
        if (err) throw err;
    })

};

let getAll = async() => {
    let roomMap = {};
    await Reserve.find({},function(err, places) {

        places.forEach(function(place) {
            roomMap[place._id] = place;
        });
    });
    return roomMap
};
let isEmpty = async(index) =>{
    Reserve.find( {}, function (err, results) {
        if (err) {
            throw new err;
        }
        if (!results.length) {
            return true
        }
    })
    return false
};
let getPlace = async(index) => {
    let roomMap = {};
    let count = -1;
    await Reserve
        .findOne({ number: index})
        .exec(function (err, member) {
            roomMap = member
        });
    return roomMap
};
let returnPlace = async(index) =>{

};

module.exports = {
    remove,
    create,
    getAll,
    getPlace,
    isEmpty
};