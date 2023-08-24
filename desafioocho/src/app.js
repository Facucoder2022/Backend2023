const express = require('express')
const handlebars = require('express-handlebars');
const session = require('express-session')
const { create } = require('connect-mongo');
const {connectDb} = require('./config/configServer')
const appRouter = require('./routes')
const logger = require('morgan')

const cookieParser = require('cookie-parser')
const passport = require('passport')
const { initPassport } = require('./passport-jwt/passport.config');
const { getProducts } = require('./dao/product.mongo');
const { productModel } = './dao/model/product.model';


const app = express()
const PORT = 8080

connectDb()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')


app.use(express.json())
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

app.get('/', (req, res) =>{
    let testUser = {
        name: "Facu",
        last_name : "Manta0"
    }
    res.render('index', testUser);
})

app.get('/home', async (req, res) =>{
    let products = await getProducts();
    console.log('products', products);
    res.render('home', { products });
})

app.get('/login', (req, res) =>{
    let testUser = {
        name: "Facu",
        last_name : "Manta0"
    }
    res.render('login', testUser);
})

app.get('/register', (req, res) =>{
    let testUser = {
        name: "Facu",
        last_name : "Manta0"
    }
    res.render('registerForm', testUser);
})


initPassport()
passport.use(passport.initialize())
passport.use(passport.session())

app.use(appRouter)

app.listen(PORT, (err)=> {
    if (err) console.log('Erro en el servidor', err)
    console.log(`Escuchando en el puerto: ${PORT}`)
})
