let Telegrams = [];
let fs = require("fs");
var Telegram = require('../models/telegram').Telegram;

let remove = async(index) => {
    Telegram.find({ id:index }).remove().exec()

};
let create = async(TelegramTodb) => {
    let telegram = new Telegram(TelegramTodb);
    telegram.save(function (err, tel, affected) {
        if (err) throw err;
    })

};
let getById = async(index) =>{
    let isThere = {}
    await Telegram.findOne({id: index}, function (err, Telegram) {
        isThere = Telegram
    });
    return isThere
}
let getAll = async() => {
    let count = 0;
    let TelegramMap = {};
    await Telegram.find({},function(err, Telegrams) {

        Telegrams.forEach(function(Telegram) {
            TelegramMap[count] = Telegram;
            count++;
        });
    });
    return TelegramMap
};

module.exports = {
    remove,
    create,
    getAll,
    getById
};