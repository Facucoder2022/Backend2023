const { Router } = require("express");
const CartManager = require("../dao/cart.mongo");

const router = Router();

router.get("/:cId", async (req, res) => {
	try {
		const { cId } = req.params;
		if (parseInt(cId) <= 0) {
			const carts = await CartManager.getCarts();
			return res.status(200).send({ status: 200, payload: carts });
		}

		const cart = await CartManager.getCartById(cId);
		return res.status(200).send({ status: 200, payload: cart });

		res.status(200).send({ status: 200, payload: cart, payload2: carts });
	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
	}
	{
        console.log(error)
    }
});

router.get("/", async (req, res) => {
	try {
		const carts = await CartManager.getCarts();
		return res.status(200).send({ status: 200, payload: carts });
	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
	}
});

router.post("/", async (req, res) => {
	try {
		const array = await CartManager.addCart(req.body);
		res.status(200).send({ status: 200, payload: array });
	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
	}
	{
        console.log(error)
    }
});

// router.delete('/cart/:productId', (req, res) => {
// 	const productId = parseInt(req.params.productId);
  
// 	// Find the index of the product in the shopping cart
// 	const productIndex = shoppingCart.findIndex(product => product.id === productId);
  
// 	if (productIndex !== -1) {
// 	  // Remove the product from the shopping cart
// 	  shoppingCart.splice(productIndex, 1);
// 	  res.status(200).json({ message: 'Product removed from cart successfully' });
// 	} else {
// 	  res.status(404).json({ message: 'Product not found in cart' });
// 	}
//   });

router.post("/:cId/product/:pId", async (req, res) => {
	try {
		const { cId, pId } = req.params;
		const getCartArray = await CartManager.addProductCart(cId, pId);

		res.status(200).send({ status: 200, payload: getCartArray });
	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
	}
	{
        console.log(error)
    }
});

module.exports = router;