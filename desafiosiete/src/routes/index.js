const { Router } = require("express");

const { uploader } = require('../utils/multer')

const productRouter = require("./products.router");
const viewsRouter = require ('./views.router')
const cartRouter = require("./cart.router");
const userRouter = require('./user.router')
const sessionRouter = require("./session.router");

const router = Router();

router.use("/views", viewsRouter);
router.use("/api/session", sessionRouter);

router.use("/api/products", productRouter);
router.use("/api/carts", cartRouter);
router.use('/api/usuarios', userRouter)


// router.post('/single', uploader.single('myfile'), (req, res)=>{
//     res.status(200).send({
//         status: 'success',
//         message: 'se subió correctamente'
//     })
// })

module.exports = router;