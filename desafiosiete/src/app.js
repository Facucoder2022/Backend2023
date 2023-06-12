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
app.use(passport.initialize())

app.use(appRouter)

app.listen(PORT, (err)=> {
    if (err) console.log('Erro en el servidor', err)
    console.log(`Escuchando en el puerto: ${PORT}`)
})


// const express = require('express')
// const session = require('express-session')
// const cookieParser = require('cookie-parser')

// const objectConfig = require('./config/configServer')
// const appRouter = require('./routes')

// // ______________________________________________________


// const FileStore  = require('session-file-store')
// const {create} = require('connect-mongo') 

// // hbs __________________________________________________________________
// const handlebars = require('express-handlebars')
// const { connect } = require('mongoose')

// // passport 
// const { initPassport, initPassportGithub } = require('./config/passport.config')
// const passport = require('passport')
// //__________________________________________________________________________
// const { Server } = require('socket.io')

// const app = express()
// const PORT = 8080 //|| process.env.PORT

// const httpServer = app.listen(PORT,()=>{
//     console.log(`Escuchando en el puerto: ${PORT}`)
// })

// const io = new Server(httpServer)

// objectConfig.connectDb()



// app.engine('handlebars', handlebars.engine())
// app.set('views', __dirname+'/views')
// app.set('view engine', 'handlebars')


// app.use(express.json()) 
// app.use(express.urlencoded({extended: true}))

// app.use('/static', express.static(__dirname+'/public'))
// app.use(cookieParser('P@l@braS3cr3t0'))


// // mid de tercero 1
// // app.use(session({
//     //     secret: 'secretCoder',
//     //     resave: true,
//     //     saveUninitialized: true
//     // }))    
    
// // const fileStore = FileStore(session)

// // app.use(session({
// //         store: new fileStore({
// //             ttl: 10,
// //             path: './session',
// //             retries: 0
// //         }),

// //         secret: 'secretCoder',
// //         resave: true,
// //         saveUninitialized: true
// // })) 

// // mongo
// app.use(session({
//         store: create({
//             mongoUrl: 'mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce0',
//             mongoOptions: {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true
//             },
//             ttl: 1000000*6000
//         }),
//         secret: 'secretCoder',
//         resave: false,
//         saveUninitialized: false
// })) 

// // initPassport()
// initPassportGithub()
// passport.use(passport.initialize())
// passport.use(passport.session())

// app.use(appRouter)

// let messages = []

// io.on('connection', socket => {
//     console.log('Nuevo cliente conectado')
//     socket.on('message', data => {
//         // console.log(data)
//         messages.push(data)
//         io.emit('messageLogs', messages)
//     })

//     socket.on('authenticated', data => {
//         socket.broadcast.emit('newUserConnected', data)
//     })

// })

// app.use((err, req, res, next)=>{
//     console.log(err)
//     res.status(500).send('Todo mal')
// })







// const express = require('express')
// const { connectDb } = require('./config/configServer');
// const routerServer = require('./routes')
// const logger = require('morgan')
// const session = require('express-session')
// const cookieParser = require('cookie-parser')
// const FileStore  = require('session-file-store')
// const handlebars = require('express-handlebars')
// const { connect } = require('mongoose');
// const { initPassportGithub } = require('./config/passport.config.js')
// const passport = require('passport')




// //require("./db.js");

// const app = express()
// const PORT = 8080

// connectDb()
//   .then(() => {
//     console.log('Conexión exitosa a la base de datos');
//     // Puedes realizar otras operaciones después de que la conexión se haya establecido correctamente
//   })
//   .catch((error) => {
//     console.error('Error al conectar a la base de datos:', error);
//   });
// //connectDb()

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use('/static',express.static(__dirname+'/public'))
// app.use(logger('dev'))

// app.use(cookieParser('P@l@braS3cr3t0'))

// app.engine('handlebars', handlebars.engine())
// app.set('views', __dirname+'/views')
// app.set('view engine', 'handlebars')

// app.use(session({
//       secret: 'secretCoder',
//       resave: true,
//       saveUninitialized: true
//  })) 

// //mongo
// // app.use(session({
// //   store: create({
// //       mongoUrl: 'mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce',
// //       mongoOptions: {
// //           useNewUrlParser: true,
// //           useUnifiedTopology: true
// //       },
// //       ttl: 1000000*6000
// //   }),
// //   secret: 'secretCoder',
// //   resave: false,
// //   saveUninitialized: false
// // })) 


// initPassportGithub()
// passport.use(passport.initialize())
// passport.use(passport.session())


// app.use(routerServer)

// // app.listen(PORT, (err)=> {
// //     if (err) console.log('Erro en el servidor', err)
// //     console.log(`Escuchando en el puerto: ${PORT}`)
// // })

// app.use((err, req, res, next)=>{
//   console.log(err)
//   res.status(500).send('Todo mal')
// })

