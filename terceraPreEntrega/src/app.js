const express = require('express')
const nodemailer = require ('nodemailer')
const session = require('express-session')
const cors = require('cors')
const { create } = require('connect-mongo');
const {connectDb} = require('./config/configServer')
const appRouter = require('./routes')
const logger = require('morgan')

const cookieParser = require('cookie-parser')
const passport = require('passport')
const { initPassport } = require('./passport-jwt/passport.config')

const app = express()
const PORT = 8080

connectDb()

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use('/static',express.static(__dirname+'/public'))
app.use(logger('dev'))
app.use(cookieParser())

app.use(session({
    store: create({
        mongoUrl: 'mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce',
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 1000000*6000
    }),
    secret: 'secretCoder',
    resave: false,
    saveUninitialized: false
})) 



initPassport()
passport.use(passport.initialize())
passport.use(passport.session())

app.use(appRouter)

app.listen(PORT, (err)=> {
    if (err) console.log('Erro en el servidor', err)
    console.log(`Escuchando en el puerto: ${PORT}`)
})
