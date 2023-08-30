const express = require('express')
const handlebars = require('express-handlebars');
// const session = require('express-session')
// const { create } = require('connect-mongo');
const {config} = require('./config/configServer')
const appRouter = require('./routes')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const { initializePassport } = require('./passport-jwt/passport.config');
const { getProducts } = require('./dao/product.mongo');
const errorHandler = require("./utils/middlewares/errorHandler");

const loggerDevelopment = require('./utils/logger.development');
const loggerProduction = require('./utils/logger.productions');

const logger = process.env.NODE_ENV === 'production' ? loggerProduction : loggerDevelopment;

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')


const app = express()
const PORT = process.env.PORT||8080 


//connectDb()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/static',express.static(__dirname+'/public'))

app.use(cookieParser())

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de adoptame',
            description: 'Esta es la documentación de adoptame'
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
}
const specs = swaggerJsDoc(swaggerOptions)

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))


// app.use(session({
//     store: create({
//         mongoUrl: 'mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce',
//         mongoOptions: {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         },
//         ttl: 1000000*6000
//     }),
//     secret: 'secretCoder',
//     resave: false,
//     saveUninitialized: false
// })) 

app.use((req, res, next) => {
    req.logger = logger;
    next();
  });

// app.get('/', (req, res) =>{
//     let testUser = {
//         name: "Facu",
//         last_name : "Manta0"
//     }
//     res.render('index', testUser);
// })

app.get('/home', async (req, res) =>{
    let products = await getProducts();
    console.log = (message) =>{
        req.logger.info(message);
    }
    res.render('home', { products });
})

app.get('/login', (req, res) =>{
    let testUser = {
        name: "Facu",
        last_name : "Manta"
    }
    res.render('login', testUser);
})

app.get('/register', (req, res) =>{
    let testUser = {
        name: "Facu",
        last_name : "Manta"
    }
    res.render('registerForm', testUser);
})


initializePassport()
app.use(passport.initialize())
// passport.use(passport.session())

app.use(appRouter)

app.use(errorHandler)



app.listen(PORT, (err)=> {
    if (err) console.log('Erro en el servidor', err)
    console.log(`Escuchando en el puerto: ${PORT}`)
})
