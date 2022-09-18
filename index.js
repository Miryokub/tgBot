const TelegramBot = require('node-telegram-bot-api')
// const { button } = require('telegraf/typings/markup')
 const debug = require('./helpers')
 const TOKEN = '5656398716:AAFSvmfml-DRdgsMcgf-YYeGXNB_qMbokTE'

console.log('bot has been started ...')
const bot = new TelegramBot(TOKEN, {
     polling: {
         interval: 300,
         autoStart: true,
         params: {
             timeout: 10
         }
     }})
bot.on('message', msg => {
  
    const chatId = msg.chat.id
   
    if (msg.text === 'close') {

     bot.sendMessage(chatId, 'closing ', {
       reply_markup: {
           remove_keyboard:true
       } 
     })  
    }else if (msg.text === 'reply'){
     bot.sendMessage(chatId, 'answering',{
       reply_markup: {
         force_reply: true
       }  
     })
    }else{
     
        bot.sendMessage(chatId, 'Could you order something please', {
            reply_markup: {
              keyboard: [
                 [{
                   text: ' 📍 send location',
                   request_location:true
                 }],
                 ['reply','close'],
                 [{
                    text:' ☎️ send contact',
                    request_contact: true
                 }] 
              ] 
            }
         })    
    }
})     