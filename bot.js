const { default: Telegraf } = require('telegraf')

require('dotenv').config()
const API_KEY = process.env.API_KEY

if (!API_KEY) throw new Error('Ошибка получения API_KEY из файла .env')

const bot = new Telegraf(API_KEY)

const users = []

bot.start(ctx => ctx.reply('Отправь свой логин Instagram для начала работы.\nНапример: kermanbanan'))

bot.hears(/[a-zA-Z0-9_.]{1,30}/, ctx => {
    users.push({nickname: ctx.match[0], tgUsername: ctx.message.from.id})
    ctx.reply('Проверяю логин...')
})

bot.launch()