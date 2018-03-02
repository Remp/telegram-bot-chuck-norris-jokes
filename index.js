const {cron} = require('./cron');
const {bot} = require('./bot');
const chats = require('./chats');

cron.start();

bot.on('message', msg => {
    const chatId = msg.chat.id;
    switch(msg.text){
        case '/subscribe':
            chats.push(chatId);
            bot.sendMessage(chatId, 'now you are subscribed');
            break;
        case '/unsubscribe':
            const index = chats.indexOf(chatId);
            chats.splice(index, 1);
            bot.sendMessage(chatId, 'you are unsubscribed')
            break;
        case '/info':
            bot.sendMessage(chatId, `available commands: 
            /subscribe - subscribe you on getting jokes 
            /unsubscribe - opposite to command /subscribe`);
            break;
    }
})

