const { Router } = require('express')
const productsRouter = require('./products.router.js')
const usersRouter = require('./user.router.js')

const router = Router()

router.use('/api/products', productsRouter)
router.use('/api/users', usersRouter)
    


module.exports = router