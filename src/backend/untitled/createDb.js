var Room = require('./models/room').Room;

var mongoose = require('mongoose');

mongoose.set('debug',true);

var async = require('async');
async.series([
    open,
    getAll(),
    close()
]);
/*series([
    open,
    dropDatabase,
    createUsers,
    close
],function (err) {
    console.log(arguments);
});*/
function remove(callback) {
  Room.find({ id:3 }).remove().exec()
}
function open(callback) {
    mongoose.connection.on('open',callback);
}

function dropDatabase(callback) {
    Room.remove({}, function(err, row) {
        if (err) {
            console.log("Collection couldn't be removed" + err);
            return;
        }

        console.log("collection removed");
    })
}

function createRooms(callback) {
    var rooms = [
        {id: 1, type: "Комната",games:["FIFA 17"," GTA 5"," MK XL"," SHADOW OF MORDOR"], price: "150", capacity: "10",description:"Комната для небольших компаний", img:"https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/vip1.png?alt=media&token=4faad9be-991f-4e6f-9648-c7dbf1f24b40"},
        {id: 2, type: "Комната",games:["PES 2018"," GTA 4"," KC GO"," UNCHARTED 4"],price: "100" ,capacity: "6",description:"Комната для больших компаний",img:"https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/vip2.png?alt=media&token=8a686319-504e-407e-8222-bddc8f78013f"},
        {id: 3, type: "Комната",games:["FIFA 18"," INFAMOUS 2"," COD 2"," ROCKET LEAGUE"],price:"200",capacity:"4",description:"Комната для маленьких компаний",img:"https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/vip3.png?alt=media&token=075d3443-5c0c-4efd-bd55-4f59e66ee605"},
        {id: 4, type: "Комната",games:["DESTINY"," CIVILIZATION 6"," FIFA 15"," PES 2018"],price:"100",capacity:"2",description:"Комната для больших компаний",img:"https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/vip4.png?alt=media&token=4688fb40-5673-415f-b004-2a8dd9f34305"},
        {id: 5, description:"",capacity:"",type:"",price:"",games:[""],img:"https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/vip5.jpg?alt=media&token=82f1014c-2905-470e-a78d-338571889c28"},
        {id: 8, description:"",capacity:"",type:"",price:"",games:[""],img:"https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/all.png?alt=media&token=c7b9289e-9de7-47f5-b2b6-dc81ce6674ff"}
    ];

    async.each(rooms, function (roomData, callback) {
        var room = new Room(roomData);
        room.save(callback);
    }, callback);
}

function close(callback) {
    mongoose.disconnect(callback);
}
function getAll() {
    Room.find({}, function(err, rooms) {
        var userMap = {};

        rooms.forEach(function(user) {
            userMap[user._id] = user;
        });
        console.log(userMap);
    });
}
/*var user = User({
  username: "Tester3",
  password: "secret"
});

user.save(function (err, user, affected) {
   if (err) throw err;
   User.findOne({
       username: "Tester"
   }, function (err, tester) {
       console.log(tester);
   })
});*/