const {connect} = require('mongoose')
const dotenv = require('dotenv')
const { commander } = require('../utils/commander')

const { mode } = commander.opts()
dotenv.config({
    path: mode === 'development' ? './.env.development': './.env.production' 
})

// let url = 'mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce'
let url = process.env.MONGO_URL_LOCAL


module.exports = {
    port: process.env.PORT,
    jwt_secret_key: process.env.JWT_SECRET_KEY,
    gmail_user_app: process.env.GMAIL_USER_APP,
    gmail_pass_app: process.env.GMAIL_PASS_APP,
    connectDb: async () => {
        try {
            connect(url)
            console.log('Base de datos conectadas')             
        } catch (err) {
            console.log(err)
        } 
    }
}
