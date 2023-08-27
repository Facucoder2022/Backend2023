const express = require('express' )
const mongoose = require('mongoose' )
const cookieParser = require('cookie-parser' )

const usersRouter = require('./routes/user.router' )
// const petsRouter = require('./routes/pets.router.js' )
// const adoptionsRouter = require('./routes/adoption.router.js' )
const sessionsRouter = require('./routes/session.router')
const { addLogger } = require('./middleware/logger.middleware')
const { logger } = require('./config/configServer')

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')

const app = express() 
const PORT = process.env.PORT||8080 
const connection = mongoose.connect(`mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce`)
logger.info('Base de datos conectada')

app.use(express.json())
app.use(cookieParser())
app.use(addLogger)
// para instalar swagger y generar la docs npm i swagger-jsdoc swagger-ui-express
// config
const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación para la app de mascotas',
            description: 'Esta es la documentación de adoptame'
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
}
const specs = swaggerJsDoc(swaggerOptions)

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))
app.use('/api/users',usersRouter) 
// app.use('/api/pets',petsRouter) 
// app.use('/api/adoptions',adoptionsRouter) 
app.use('/api/sessions',sessionsRouter) 

app.listen(PORT,()=>logger.info(`Listening on ${PORT}`))
