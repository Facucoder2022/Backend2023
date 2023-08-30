const express = require('express' )
const mongoose = require('mongoose' )
const cookieParser = require('cookie-parser' )

const usersRouter = require('./routes/users.router.js' )
// const petsRouter = require('./routes/pets.router.js' )
// const adoptionsRouter = require('./routes/adoption.router.js' )
const sessionsRouter = require('./routes/sessions.router.js')
const paymentsRouter = require('./routes/payments.router.js')
const cors = require('cors')
require('dotenv').config()

// swagger
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')

const app = express() 
const PORT = process.env.PORT||8080 
const mongo_url= process.env.MONGO_URL
// console.log(mongo_url)
const connection = mongoose.connect('mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce')

app.use(express.json())
app.use(cookieParser())
app.use(cors())

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

app.use('/api/payments', paymentsRouter)
app.use('/api/users',usersRouter) 
// app.use('/api/pets',petsRouter) 
// app.use('/api/adoptions',adoptionsRouter) 
app.use('/api/sessions',sessionsRouter) 

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
