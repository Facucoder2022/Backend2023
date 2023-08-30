const { Router } = require('express');
const cartsController = require('../controllers/carts.controller');

const router = Router();

router.get('/', cartsController.getAllCarts);
router.get('/:cid', cartsController.getCart);
router.post('/', cartsController.createCart);
router.put('/:cid/addProduct/:pid', cartsController.addProductToCart);
router.delete('/:cid', cartsController.deleteCart);
router.post('/:cid/purchase', cartsController.purchaseFromCart);

module.exports = router;
