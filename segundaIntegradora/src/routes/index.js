

const { Router } = require('express')
const {uploader} = require('../utils/multer')
const productRouter = require('./products.router')
const cartRouter = require("./cart.router");
const userRouter = require('./user.router')
const sessionsRouter = require('./session.router')

const router = Router()


// router.use('/', (req,res)=>{
//     res.send('Hola mundo')
// })

router.use('/sessions', sessionsRouter)

router.use('/sessions/allUsers', sessionsRouter)


router.use('/api/products', productRouter)

router.use("/api/carts", cartRouter);

router.use('/api/usuarios', userRouter)

router.post('/upload',  uploader.single('myFile'),(req, res)=>{
    res.send({
        status: 'successs', 
        mensaje: 'Archivo subido con éxitos'
    })
} )

module.exports = router