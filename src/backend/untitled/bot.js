let events = require('./modules/eventRefuge')
let reserve = require('./modules/reserveRefuge')
let rooms = require('./modules/roomRefuge')
let Event = require('./models/event').Event;
let telegram = require('./modules/telegramRefuge')
require('dotenv').config();
let token = process.env.TOKEN;
let Bot = require('node-telegram-bot-api');
let bot;
if(process.env.NODE_ENV === 'production') {
    bot = new Bot(token, { polling: true });
   /* bot = new Bot(token);
    bot.setWebHook(process.env.HEROKU_URL +":"+process.env.PORT + bot.token);*/
}
else {
    bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');
let notes = [];
let users = [];
let comands = [
    {name:'/help - ', value: 'Инструкции бота'},
    {name:'/events - ', value:'Получить все события в заведении'},
    {name:'/prices - ', value:'Показать все места в заведении с их ценами'},
    {name:'/games - ', value:'Показать доступные игры за приставкой'},
    {name:'/contacts - ', value:'Контакты заведения'},
    {name:'/address - ', value:'Наше месторасполажение'},
    {name:'/book место на время - ', value:'Забронировать выбранное место на указаное время'},
    {name:'/getPlaces на время - ', value:'Показать свободные места на указанное время'}]
bot.onText(/\/напомни (.+) в (.+)/, function (msg, match) {
    let userId = msg.from.id;
    let text = match[1];
    let time = match[2];
    console.log(time)
    console.log(text)
    notes.push({'uid': userId, 'time': time, 'text': text});
    bot.sendMessage(userId, 'Отлично! Я обязательно напомню, если не сдохну :)');
});
bot.onText(/\/prices/, async function (msg, match) {
    let userId = msg.from.id;
    let rm = Object.values(await rooms.getAll())
    let str = 'Список мест\n'
    rm.forEach(function (room, i) {
        str+='Место ' + room.id + ',цена - ' + room.price + ' грн/час\n'
    })
    bot.sendMessage(userId, str);
});
bot.onText(/\/contacts/, async function (msg, match) {
    let contacts = ['0686897387']
    let userId = msg.from.id;
    let str = 'Контакты:\n'
    contacts.forEach(function (contact, i) {
        str+=' ' + contact
    })
    bot.sendMessage(userId, str);
});
bot.onText(/\/address/, function (msg, match) {
    let userId = msg.from.id;
    bot.sendMessage(userId, 'г.Херсон ул.Ленина д.70');
});
bot.onText(/\/games/, async function (msg, match) {
    let userId = msg.from.id;
    let rm = Object.values(await rooms.getAll())
    let str = 'Список мест\n'
    rm.forEach(function (room, i) {
        str+='Место ' + room.id + ',игры - ' + room.games + '\n'
    })
    bot.sendMessage(userId, str);
});
bot.onText(/\/book (.+) от (.+) до (.+) на (.+) (.+) (.+)/, async function (msg, match) {
    const chatId = msg.chat.id;
    let count = 1;
    let place = {
        number: -1,
        timeBefore:[],
        timeAfter:[],
        name: [],
        phone:[],
        personCount: []
    };
    let phoneNumberPattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    for(let prop in place){
        if(prop === 'number'){
            place.number = match[1]
        }
        else {
            place[prop][0] = match[count];
        }
        count++;
    }
    let userId = msg.from.id;
    if(!phoneNumberPattern.test(place.phone[0])){
        bot.sendMessage(userId, 'Ведите корректный номер телефона');
        return;
    }
    try {
        await reserve.create(place)
        bot.sendMessage(userId, 'Отлично! место '+ match[1]+ ' забронировано на имя ' + place.name[0]);
    }catch(e) {
        console.log(e)
        bot.sendMessage(userId, 'Упс, что-то пошло не так, попробуйте нам позвонить');
    }
});
bot.onText(/\/getPlaces на (.+)/, async function (msg, match) {
    let allPlaces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    let userId = msg.from.id;
    let text = match[1];
    let time = match[2];
    let array = Object.values(await reserve.getAll())
    await array.forEach(function (places, i) {
        for(let i = 0; i < places.name.length; i++) {
            if((parseInt(text.replace(':','')) >= parseInt(places.timeBefore[i].replace(':',''))) &&
                (parseInt(text.replace(':','')) <= parseInt(places.timeAfter[i].replace(':','')))){
                let index = allPlaces.indexOf(places.number);
                allPlaces.splice(index,1)
            }
        }
    })
    let str = 'Свободные места:\n'
    allPlaces.forEach(function (place,i) {
        str+=place + ', '
    })
    bot.sendMessage(userId,str);
    notes.push({'uid': userId, 'time': time, 'text': text});
});
bot.onText(/\/start/, async (msg) => {
    let userId = msg.from.id;
    let user = {
        account: userId,
        listen: false
    }
    await telegram.create(user);

});
bot.onText(/\/help/, function (msg, match) {
    let userId = msg.from.id;
    let text = match[1];
    let time = match[2];
    comands.forEach(function (comand,i) {
        bot.sendMessage(userId, comand.name + ' ' + comand.value);
    })
    notes.push({'uid': userId, 'time': time, 'text': text});
});
bot.onText(/\/events/, async function (msg, match) {
    let userId = msg.from.id;
    let array = Object.values(await events.getAll())
    array.forEach(function (event, i) {
        bot.sendMessage(userId, 'Событие - ' + event.title + '\nДата - ' + event.date);
    })
});
bot.onText(/\/getAll/, async function (msg, match) {

    users = Object.values(await telegram.getAll())
    users.forEach(function (user,i) {
        bot.sendMessage(user.account, 'i = ' + i + 'id = ' + user.account);
    })
})

let newEvent = async function (event) {
    users = Object.values(await telegram.getAll())
    users.forEach(function (user,i) {
        bot.sendMessage(user.account, 'Хей, у нас новое событие, взгляни\n' + event.title + ' Дата:'+event.date);
    })

}
module.exports = {
    newEvent
}