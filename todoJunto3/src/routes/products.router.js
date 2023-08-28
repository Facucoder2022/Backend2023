const { Router } =  require('express')
const productsController =  require('../controllers/products.controller')
const {uploader} =  require('../utils/uploader.js')

const router = Router()

router.get('/',productsController.getProducts)
router.get('/:pid',productsController.getProductById)
router.post('/',productsController.addProducts)
router.put('/:pid',productsController.updateProducts)
router.delete('/:pid',productsController.deleteProducts)

module.exports = router
