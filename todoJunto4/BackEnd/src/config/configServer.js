const { MongoSingleton } = require('./singleton')
const program = require('../utils/commander')
const dotenv = require('dotenv')
const { logger } = require('./logger')

const { mode } = program.opts()

dotenv.config({path: './.env'})
dotenv.config({
    path: mode === 'development' ? './.env.development': './.env.production' 
})
// console.log('privateKey:', process.env.PRIVATE_KEY_JWT);

const mongoInstance = async () => {
    try{
        await MongoSingleton.getInstance()
    }catch(err){
        logger.error(err);
    }
}

module.exports = { mongoInstance, environment: mode }