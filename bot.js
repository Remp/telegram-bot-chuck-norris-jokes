const TelegramBot = require('node-telegram-bot-api');
const token = '555864412:AAFGJ9W4zTP0pY-TdAdTB_E2K0pFqJhJgd8';

exports.bot = new TelegramBot(token, {
    polling: true
});

