const express = require('express')
const {connectDb} = require('./config/configServer')
const appRouter = require('./routes')
const logger = require('morgan')

const cookieParser = require('cookie-parser')
const passport = require('passport')
const { initializePassport } = require('./passport-jwt/passport.config')

const app = express()
const PORT = 8080

connectDb()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/static',express.static(__dirname+'/public'))
app.use(logger('dev'))
app.use(cookieParser())


initializePassport()
passport.use(passport.initialize())

app.use(appRouter)

app.listen(PORT, (err)=> {
    if (err) console.log('Error en el servidor', err)
    console.log(`Escuchando en el puerto: ${PORT}`)
})
