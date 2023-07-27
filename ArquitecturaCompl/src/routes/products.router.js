const { Router } = require('express')
const { ProductController } = require('../controllers/products.controller')
const products = new ProductController()

const router = Router()

router.get('/', products.getProuducts)
router.get('/:pid', products.getProuduct)
router.post('/', products.createProuduct)
router.put('/:pid', products.updateProuduct)
router.delete('/:pid', products.deleteProuduct)


module.exports = router