const {Router} =require('express')
const productManager = require('../dao/mongo/product.mongo')
const { authenticate } = require('passport')
const { passportAuth } = require('../passport-jwt/passportAuth')
const { authorizaton } = require('../passport-jwt/passportAuthorization')

const router =  Router()
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller')

router.get('/',        getProducts )
router.get('/:pid',    getProduct )
router.post('/',       createProduct )
router.put('/:pid',    updateProduct )
router.delete('/:pid', deleteProduct )

module.exports = router