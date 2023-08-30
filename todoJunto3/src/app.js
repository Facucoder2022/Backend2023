const express = require('express' )
const mongoose = require('mongoose' )
const cookieParser = require('cookie-parser' )

const usersRouter = require('./routes/user.router' )
const productsRouter = require('./routes/products.router' )
const cartsRouter = require('./routes/cart.router' )
const sessionsRouter = require('./routes/session.router')
const { addLogger } = require('./middleware/logger.middleware')
const { logger } = require('./config/logger')

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')

const app = express() 
const PORT = process.env.PORT||8080 
const connection = mongoose.connect(`mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce`)
logger.info('Base de datos conectada')

app.use(express.json())
app.use(cookieParser())
app.use(addLogger)

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación para ecommerce de NBA Uruguay',
            description: 'Esta es la documentación de mi ecommerce'
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
}
const specs = swaggerJsDoc(swaggerOptions)

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))
app.use('/api/users',usersRouter) 
app.use('/api/products',productsRouter) 
app.use('/api/carts',cartsRouter) 
app.use('/api/sessions',sessionsRouter) 

app.listen(PORT,()=>logger.info(`Listening on ${PORT}`))

