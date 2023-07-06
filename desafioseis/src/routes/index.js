const { Router } = require("express");

const { uploader } = require('../utils/multer')

const productRouter = require("./products.router");
const cartRouter = require("./cart.router");
const userRouter = require('./user.router')
const sessionRouter = require("./session.router");
const viewsRouter = require('./view.router')

const router = Router();

router.use("/api/products", productRouter);
router.use("/api/carts", cartRouter);
router.use('/api/usuarios', userRouter)
router.use("/api/sessions", sessionRouter);
router.use('/views', viewsRouter),

 router.post('/single', uploader.single('myfile'), (req, res)=>{
     res.status(200).send({
         status: 'success',
         message: 'se subió correctamente'
     })
 })


module.exports = router;