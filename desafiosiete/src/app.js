const express = require('express')
const { connectDb } = require('./config/configServer');
const routerServer = require('./routes')
const logger = require('morgan')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const FileStore  = require('session-file-store')
const handlebars = require('express-handlebars')
const { connect } = require('mongoose')



//require("./db.js");

const app = express()
const PORT = 8080

connectDb()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    // Puedes realizar otras operaciones después de que la conexión se haya establecido correctamente
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
//connectDb()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/static',express.static(__dirname+'/public'))
app.use(logger('dev'))

app.use(cookieParser('P@l@braS3cr3t0'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

app.use(session({
      secret: 'secretCoder',
      resave: true,
      saveUninitialized: true
 })) 

//mongo
// app.use(session({
//   store: create({
//       mongoUrl: 'mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce',
//       mongoOptions: {
//           useNewUrlParser: true,
//           useUnifiedTopology: true
//       },
//       ttl: 1000000*6000
//   }),
//   secret: 'secretCoder',
//   resave: false,
//   saveUninitialized: false
// })) 


app.use(routerServer)

// app.listen(PORT, (err)=> {
//     if (err) console.log('Erro en el servidor', err)
//     console.log(`Escuchando en el puerto: ${PORT}`)
// })

app.use((err, req, res, next)=>{
  console.log(err)
  res.status(500).send('Todo mal')
})

