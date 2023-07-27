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

router.delete('/:cid/products/:pid', (req, res) => {
	const productId = req.params.productId;

  // Buscar el índice del producto en el carrito
  const productIndex = cart.findIndex(item => item.productId === productId);

  if (productIndex !== -1) {
    // Eliminar el producto del carrito
    cart.splice(productIndex, 1);
    res.sendStatus(200); // Enviar una respuesta de éxito
  } else {
    res.sendStatus(404); // Enviar una respuesta de error si el producto no se encontró en el carrito
  }
});
	

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