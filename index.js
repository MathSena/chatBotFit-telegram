const TelegramBot =  require('node-telegram-bot-api');

const token = '1527469906:AAFnJY8pz-lGlCnWNnRapPB54krrEfHAZN8';

const bot = new TelegramBot(token, {polling: true});