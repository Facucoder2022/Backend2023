const { Router } = require("express");
const cartManager = require("../dao/cart.mongo");


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
        console.log = (message) =>{
            req.logger.info(message);
        }

    }
});


router.post('/:cid/purcharse', async (req, res)=>{
    const { cid } = req.params
    const cart = await cartService.getCart(cid)
    // validación que exista el cart
     if(!cart) return 

    const productNoComprado = []

    for (const item in cart.products){
        const product = item.product
        const quantity = item.quantity
        const stock = item.prodcut.stock
        // quantity es la cantidad que yo quiero comprar
        if(quantity > stock){
            productNoComprado.push(product)
        }else{
            // findbyIdandupdate
            // item.product(objeto de pro)
            // item.product.stock -=  quantity
            const respuesta = productServices.updateProduct(product, { quantity: stock - quantity})
        }        
    }

    

     //const arrayProductosComprables = cart.products.filter(product => !productNoComprado.includes(item.prodcut._id)).reduce()
    // crear el ticket con los datos de la compra
    
    if (productNoComprado.length > 0) {
        // quitar de mi carrito lo que si se compraron
       update() // in
    } else {
        await cartService.delete(cid)
    }

     const ticket = await ticketService.createTicket({
         code: '', // uuidv4 -> id mongoose, numero,  const uuidv4 = require('')        
         amount: cart.products.filter(product => !productNoComprado.includes(item.prodcut._id)).reduce(),
         purchaser: req.user.email,
     })

    res.send({
        status: 'success'
    })
})




module.exports = router;