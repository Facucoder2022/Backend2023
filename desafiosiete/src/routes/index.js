const { Router } = require("express");

const { uploader } = require('../utils/multer')

const productRouter = require("./products.router");
const cartRouter = require("./cart.router");
const filtersRouter = require("./filters");
const userRouter = require('./user.router')
const sessionRouter = require("./session.router");



const router = Router();

router.use("/api/products", productRouter);
router.use("/api/carts", cartRouter);
router.use("/api/filters", filtersRouter);
router.use('/api/usuarios', userRouter)
router.use("/api/sessions", sessionRouter);

// router.post('/single', uploader.single('myfile'), (req, res)=>{
//     res.status(200).send({
//         status: 'success',
//         message: 'se subió correctamente'
//     })
// })


module.exports = router;