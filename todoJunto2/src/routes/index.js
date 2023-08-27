

const { Router } = require('express')
const {uploader} = require('../utils/multer')
const productRouter = require('./products.router')
const cartRouter = require("./cart.router");
const userRouter = require('./user.router')
const sessionsRouter = require('./session.router')
const viewsRouter = require('./views.router')

const pruebaRouter = require('./pruebas.router')

const router = Router()

router.use('/test', pruebaRouter)

router.use('/views', viewsRouter)

router.use('/api/sessions', sessionsRouter)

router.use('/api/products', productRouter)

router.use("/api/carts", cartRouter);

router.use('/api/users', userRouter)

router.post('/upload',  uploader.single('myFile'),(req, res)=>{
    res.send({
        status: 'successs', 
        mensaje: 'Archivo subido con éxitos'
    })
} )

module.exports = router