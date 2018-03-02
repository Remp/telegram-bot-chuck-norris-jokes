const Cron = require('cron').CronJob;
const {bot} = require('./bot');
const chats = require('./chats');
const request = require('request');

exports.cron = new Cron('0,15,30,45 * * * * *', () => {
    for (let i = 0; i < chats.length; i++){
        const chatId = chats[i];
        request('http://api.icndb.com/jokes/random?firstName=Chack&amp;lastName=Norris', (err, res, body) => {
            if (err) return;
            const parsed = JSON.parse(body);
            if (parsed.type === 'success')
                bot.sendMessage(chatId, parsed.value.joke);       
        })
    }
})