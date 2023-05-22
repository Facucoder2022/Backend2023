const express = require('express');
const { connectDb } = require('./config/configServer');
const routerServer = require('./routes');
const logger = require('morgan');
// const cookieParser = require("cookie-parser");
// const session = require ('express-session');


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

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static',express.static(__dirname+'/public'));
app.use(logger('dev'));
// app.use(cookieParser());
// app.use (session({
//   secret:'secretCoder',
//   resave: true,
//   saveUninitialized: true
// }))


app.use(routerServer);

app.listen(PORT, (err)=> {
    if (err) console.log('Erro en el servidor', err)
    console.log(`Escuchando en el puerto: ${PORT}`)
})
