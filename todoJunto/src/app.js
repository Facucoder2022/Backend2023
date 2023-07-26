const express = require('express')
const routerServer = require('./routes')
const logger = require('morgan')

const cookieParser = require('cookie-parser')
const passport = require('passport')
const { initializePassport } = require('./passport-jwt/passport.config')
const { config } = require('./config/configServer')

const app = express()
console.log(config.PORT)
const PORT = config.PORT

// connectDb()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/static',express.static(__dirname+'/public'))
app.use(logger('dev'))
app.use(cookieParser())

initializePassport()
app.use(passport.initialize())

app.use(routerServer)

app.listen(PORT, (err)=> {
    if (err) console.log('Erro en el servidor', err)
    console.log(`Escuchando en el puerto: ${PORT}`)
})