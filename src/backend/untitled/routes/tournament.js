var express = require('express');
var router = express.Router();
let ref = require('../modules/tournamentRefuge')
var Tournament = require('../models/tournament').Tournament;
var formidable = require('formidable');
router.post('/', async (req, res) => {
    let newTournament = {
        players: Object,
        id: Number
    };
    let array = [];
    let index = -1;
    let id;
    let save = [];
    let match;
    let result = req.body;
    for(let name in result){
        if(name === 'match'){
            index = parseInt(result[name]);
        }
        else if(name === 'players'){
            array = JSON.parse(result[name])
            newTournament.players = array
        }
        else if(name === 'id'){
            newTournament.id = result[name]
        }
        else {
            newTournament[name] = result[name]
            Tournament.findOne({id: newTournament.id}, async function (err, event) {
                let objectMatch = {
                    [index]: {
                        players: newTournament.players,
                        content: newTournament.content
                    }
                }
                newTournament.players = await [];
                newTournament.players.push(objectMatch)
                if (!event) {
                    console.log('no event');
                    ref.create(newTournament)
                }
                else {
                    console.log('is event')
                    save = await event.players;
                    event.players.push(objectMatch);
                    await event.save(function (err, updatedTank) {
                        if (err) throw err;
                    });
                    console.log('-> post done');
                }
            });
        }
    }
   /* let newTournament = {
        players: Object,
        id: Number
    };
    let array = [];
    let index = -1;
    let id;
    let save = [];
    let match;
    //parse form
    var form = new formidable.IncomingForm(),
        fields = {};
    form
        .on('error', function(err) {
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end('error:\n\n'+util.inspect(err));
            console.error(err);
        })
        .on('field', function(name, value) {
                if(name === 'match'){
                    index = parseInt(value);
                }
                else if(name === 'players'){
                    array = JSON.parse(value)
                    newTournament.players = array
                }
                else if(name === 'id'){
                    newTournament.id = value
                }
                else {
                    newTournament[name] = value
                    Tournament.findOne({id: newTournament.id}, async function (err, event) {
                        let objectMatch = {
                            [index]: {
                                players: newTournament.players,
                                content: newTournament.content
                            }
                        }
                        newTournament.players = await [];
                        newTournament.players.push(objectMatch)
                        if (!event) {
                           console.log('no event');
                           ref.create(newTournament)
                        }
                        else {
                            console.log('is event')
                            save = await event.players;
                            event.players.push(objectMatch);
                            await event.save(function (err, updatedTank) {
                                if (err) throw err;
                            });
                            console.log('-> post done');
                        }
                    });
                }

        })

    form.parse(req);
    //send image to firebase
    */
    res.end()

});
router.get('/',async function (req, res, next) {
    var reservMap = {};
    await Tournament.find({}, function(err, places) {

        places.forEach(function(place) {
            reservMap[place._id] = place;
        });
        res.json(reservMap);
    });
    /*let places = await reserve.getAll();
    console.log(places)
    res.json(places);
    res.end();*/
});
module.exports = router;