const { Router } = require("express");
const cartManager = require("../dao/cart.mongo");
const { authenticate } = require('passport')
const { passportAuth } = require('../passport-jwt/passportAuth')
const { authorizaton } = require('../passport-jwt/passportAuthorization')

const router = Router();

router.get("/:cId", async (req, res) => {
	try {
		const { cId } = req.params;
		if (parseInt(cId) <= 0) {
			const carts = await cartManager.getCarts();
			return res.status(200).send({ status: 200, payload: carts });
		}

		const cart = await cartManager.getCartById(cId);
		return res.status(200).send({ status: 200, payload: cart });

	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
	}
	
});

router.get("/", async (req, res) => {
	try {
		const carts = await cartManager.getCarts();
		return res.status(200).send({ status: 200, payload: carts });
	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
	}
});

router.post("/", async (req, res) => {
	try {
		const array = await cartManager.addCart(req.body);
		res.status(200).send({ status: 200, payload: array });
	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
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
		const getCartArray = await cartManager.addProductCart(cId, pId);

		res.status(200).send({ status: 200, payload: getCartArray });
	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
	}
	{
        console.log(error)
    }
});

router.post("/:cId/purchase", async (req, res) => {
	try {
		const { cId } = req.params;

		// Obtener el carrito
		const cart = await cartManager.getCartById(cId);

		// Verificar si el carrito existe y no está vacío
		if (!cart || cart.products.length === 0) {
			return res.status(400).send({ status: 400, error: "El carrito está vacío o no existe." });
		}

		// Verificar el stock de productos en el carrito
		const products = await productManager.getProductById(cart.products.map(product => product.productId));
		
		// Comprobar si hay suficiente stock para cada producto en el carrito
		const insufficientStock = products.some(product => {
			const cartProduct = cart.products.find(item => item.productId === product._id.toString());
			return cartProduct.quantity > product.stock;
		});

		if (insufficientStock) {
			return res.status(400).send({ status: 400, error: "No hay suficiente stock para completar la compra." });
		}

		// Restar el stock y finalizar la compra
		await Promise.all(cart.products.map(async cartProduct => {
			const product = products.find(p => p._id.toString() === cartProduct.productId);
			await productManager.updateProduct(product._id.toString(), product.stock - cartProduct.quantity);
		}));

		// Eliminar el carrito después de la compra
		await cartManager.deleteCart(cId);

		return res.status(200).send({ status: 200, message: "Compra exitosa." });
	} catch (error) {
		res.status(500).send({ status: 500, error: error.message });
	}
});



module.exports = router;