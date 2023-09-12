const CartDto = require('../dto/Carts.dto');
const { cartsService } = require("../services/index")

const getAllCarts = async (req, res) => {
  try {
    const carts = await cartsService.getCarts();
    res.send({ status: 'success', payload: carts });
  } catch (error) {
    res.status(500).send({ status: 'error', error: 'Internal Server Error' });
  }
};

const getCart = async (req, res) => {
  try {
    const cartId = req.params.cid;
    const cart = await cartsService.getCartById(cartId);
    if (!cart) return res.status(404).send({ status: 'error', error: 'Cart not found' });
    res.send({ status: 'success', payload: cart });
  } catch (error) {
    res.status(500).send({ status: 'error', error: 'Internal Server Error' });
  }
};

const createCart = async (req, res) => {
  try {
    const { products } = req.body;
    if (!Array.isArray(products)) {
      return res.status(400).send({ status: 'error', error: 'Invalid products array' });
    }
    const result = await cartsService.addCart(products);
    res.send({ status: 'success', message: 'Cart created', payload: result });
  } catch (error) {
    res.status(500).send({ status: 'error', error: 'Internal Server Error' });
  }
};

const addProductToCart = async (req, res) => {
  try {
    const cartId = req.params.cid;
    const productId = req.params.pid;
    const result = await cartsService.addProductInCart(cartId, productId);
    res.send({ status: 'success', message: 'Product added to cart', payload: result });
  } catch (error) {
    res.status(500).send({ status: 'error', error: 'Internal Server Error' });
  }
};

const deleteCart = async (req, res) => {
  try {
    const cartId = req.params.cid;
    const result = await cartsService.deleteCart(cartId);
    res.send({ status: 'success', message: 'Cart deleted', payload: result });
  } catch (error) {
    res.status(500).send({ status: 'error', error: 'Internal Server Error' });
  }
};

const purchaseFromCart = async (req, res) => {
    try {
      const { cid } = req.params;
      const cart = await cartsService.getCartById(cid);
      if (!cart) return res.status(404).send({ status: "error", error: "Cart not found" });
  
      const productsToPurchase = [];
  
      for (const item of cart.products) {
        const product = await productsServices.getProductById(item.product);
        if (!product) {
          continue; // Skip products that don't exist
        }
  
        const quantity = item.quantity;
        const stock = product.stock;
  
        if (quantity > stock) {
          productsToPurchase.push({ product: item.product, quantity: stock });
        } else {
          // Update product stock and add to productsToPurchase
          const updatedStock = stock - quantity;
          await productsServices.updateProduct(item.product, { stock: updatedStock });
          productsToPurchase.push({ product: item.product, quantity });
        }
      }
  
      if (productsToPurchase.length > 0) {
        // Update the cart with products that were successfully purchased
        await cartsService.updateCart(cid, { products: productsToPurchase });
      } else {
        // No products were successfully purchased, so delete the cart
        await cartsService.deleteCart(cid);
      }
  
      // You can create a ticket or perform other actions related to the purchase here
  
      res.send({ status: "success", message: "Purchase completed" });
    } catch (error) {
      res.status(500).send({ status: "error", error: "Internal Server Error" });
    }
  };

module.exports = {
  getAllCarts,
  getCart,
  createCart,
  addProductToCart,
  deleteCart,
  purchaseFromCart
};


