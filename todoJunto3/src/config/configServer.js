const { MongoSingleton } = require('./singleton')
const { commander } = require('../utils/commander')
const {logger} = require ('../utils/logger')
const dotenv = require('dotenv')

const { mode } = commander.opts()
dotenv.config({
    path: mode === 'development' ? './.env.development' : './.env.production'
})

console.log('privateKey:', process.env.PRIVATE_KEY_JWT);

exports.config = {
    privateKey:  ""+process.env.PRIVATE_KEY_JWT || '',  // procees.env.PRIVATE_KEY
    mongo_url:  process.env.MONGO_URL || '',
    PORT:       process.env.PORT,
    gmail_app_password: process.env.GMAIL_APP_PASSWORD, 
    gmail_mail_admin : process.env.GMAIL_MAIL_ADMIN,
    connectDb: async ()=> await MongoSingleton.getInstance()
 
}