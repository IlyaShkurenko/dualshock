let rooms = [];
let fs = require("fs");
var Reserve = require('../models/reserve').Reserve;

let remove = async(index) => {
    Reserve.find({ number:index }).remove().exec()

};
let create = async(roomTodb) => {
    let place = await getPlace(roomTodb.number);
    if(place){
        await remove(roomTodb.number);
        console.log('remove');
        console.log(roomTodb.personCount)
        for(let prop in roomTodb){
            if(prop !== 'number'){
                console.log(prop);
                roomTodb[prop] = await roomTodb[prop].concat(place[prop])
            }
        }
                /*roomTodb.timeBefore = roomTodb.timeBefore.concat(place.timeBefore)
                roomTodb.timeAfter = roomTodb.timeAfter.concat(place.timeAfter)
                roomTodb.name = roomTodb.name.concat(place.name)
                roomTodb.phone = roomTodb.phone.concat(place.phone)
                roomTodb.count = roomTodb.count.concat(place.count)*/

    }
    let placeToSave = await new Reserve(roomTodb);
    await placeToSave.save(function (err, user, affected) {
        if (err) throw err;
        return true
    })
    return false

};

let getAll = function() {
    return Reserve.find({})
};
let getById = async(index) =>{
    let isThere = {}
    await Reserve.findOne({id: index}, function (err, Reserve) {
        isThere = Reserve
    });
    return isThere
}
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
    isEmpty,
    getById
};