const {Router} =require('express')
const productManager = require('../dao/product.mongo')
const { authenticate } = require('passport')
const { passportAuth } = require('../passport-jwt/passportAuth')
const { authorizaton } = require('../passport-jwt/passportAuthorization')

const router =  Router()

router.get('/', passportAuth('jwt'), authorizaton('user'),async (req,res)=>{
    try {
        const products = await productManager.getProducts()
        res.status(200).send({
            status: 'success',
            payload: products
        })
        
    } catch (error) {
        cconsole.log(error)
    }
})
router.get('/:pid', async (req,res)=>{
    try {
        const {pid} = req.params
        let product = await productManager.getProductById(pid)
        res.status(200).send({
            status: 'success',
            payload: product
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Página actual
      const pageSize = 10; // Tamaño de página
  
      const { docs, totalDocs, totalPages, nextPage, prevPage, hasNextPage, hasPrevPage } = await paginate(productManager, {
        query: {}, // Puedes agregar condiciones de consulta aquí
        page: page,
        limit: pageSize,
      });
  
      const response = {
        status: 'success',
        payload: docs,
        totalPages: totalPages,
        prevPage: prevPage,
        nextPage: nextPage,
        page: page,
        hasPrevPage: hasPrevPage,
        hasNextPage: hasNextPage,
        prevLink: prevPage ? `/products?page=${prevPage}` : null,
        nextLink: nextPage ? `/products?page=${nextPage}` : null,
      };
  
      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  });
  

router.post('/', async (req,res)=>{
    try {
        const newProduct = req.body

        let result = await productManager.addProduct(newProduct)


        res.status(200).send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        console.log(error)
    }
})
router.put('/:pid', (req,res)=>{
    res.status(200).send('Actualizar productos')
})
router.delete('/:pid', (req,res)=>{
    res.status(200).send('Borrar productos')
})

module.exports = router


// const { Router } = require("express");
// const productManager = require("../dao/product.mongo");

// const router = Router();

// router.get('/', async (req,res)=>{
//     try {
//         const products = await productManager.getProducts()
//         res.status(200).send({
//             status: 'success',
//             payload: products
//         })
        
//     } catch (error) {
//         console.log(error)
//     }
// })
// router.get('/:pid', async (req,res)=>{
//     try {
//         const {pid} = req.params
//         let product = await productManager.getProductById(pid)
//         res.status(200).send({
//             status: 'success',
//             payload: product
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })
// router.post('/', async (req,res)=>{
//     try {
//         const newProduct = req.body

//         let result = await productManager.addProduct(newProduct)


//         res.status(200).send({
//             status: 'success',
//             payload: result
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })
// router.put('/:pid', (req,res)=>{
//     res.status(200).send('Actualizar productos')
// })
// router.delete('/:pid', (req,res)=>{
//     res.status(200).send('Borrar productos')
// })

// router.get('/products', async (req,res)=>{

//     const products = getProducts();

//   // Obtener la página actual de la consulta de la URL
//   const page = parseInt(req.query.page) || 1;
//   const itemsPerPage = 10; // Número de productos a mostrar por página

//   // Calcular el rango de productos a mostrar en la página actual
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const paginatedProducts = products.slice(startIndex, endIndex);

//   res.render('products', { products: paginatedProducts });
// });

// // Ruta para mostrar un producto específico con su descripción completa, detalles de precio, etc.
// router.get('/products/:pid', (req, res) => {
//   const pid = req.params.productId;

//   // Obtener el producto de la base de datos o cualquier otra fuente de datos
//   const product = getProductById(pid);

//   res.render('product', { product: product });
// });

// // Ruta para agregar un producto al carrito directamente
// router.post('/products/:pid/add-to-cart', (req, res) => {
//   const pid = req.params.pid;

//   // Lógica para agregar el producto al carrito

//   res.redirect('/cart'); // Redirigir al carrito después de agregar el producto
// });

// // Ruta para visualizar un carrito específico y listar los productos que pertenezcan a dicho carrito
// router.get('/carts/:cartId', (req, res) => {
//   const cartId = req.params.cartId;

//   // Obtener el carrito de la base de datos o cualquier otra fuente de datos
//   const cart = getCartById(cartId);

//   // Obtener los productos que pertenecen a este carrito
//   const cartProducts = getProductsInCart(cartId);

//   res.render('cart', { cart: cart, products: cartProducts });
// });

//     // let page = parseInt(req.query.page);
//     // if(!page) page=1;
//     // let result = await productModel.paginate({},{page,limit:5,})

//     //         result.prevLink = result.hasPrevPage?`http://localhost:8080/products?page=${result.prevPage}`:'';
//     //         result.nextLink = result.hasNextPage?`http://localhost:8080/products?page=${result.nextPage}`:'';
//     //         result.isValid= !(page<=0||page>result.totalPages)
//     //         res.render('products',result)
//         // })

// module.exports = router






// router.get("/", async (req, res) => {
// 	try {
// 		const productsArray = await productModel.getProducts();
// 		let limit = req.query.limit;

// 		if (!limit || limit > productsArray.length) {
// 			res.send(productsArray);
// 		}

// 		return res.send(productsArray.slice(0, limit));
// 	} catch (error) {
// 		res.status(404).send({ status: 404, error: error.message });
// 	}
// });

// router.get("/:pId", async (req, res) => {
// 	try {
// 		const { pId } = req.params;
// 		const productById = await productModel.getProductById(parseInt(pId));
// 		const productsArray = await productModel.getProducts();

// 		if (!pId || pId > productsArray.length) {
// 			return res
// 				.status(404)
// 				.send({ error: `El producto con id ${pId} no existe` });
// 		}

// 		return res.send({ message: "product obtained successfully", productById });
// 	} catch (error) {
// 		res.status(404).send({ status: 404, error: error.message });
// 	}
// });

// router.post("/", async (req, res) => {
// 	try {
// 		const body = req.body;
// 		const productAdded = await productModel.addProduct(body);
// 		return res.status(200).send({
// 			status: 200,
// 			payload: { productAdded },
// 			message: "product added successfully",
// 		});
// 	} catch (error) {
// 		res.status(404).send({ status: 404, error: error.message });
// 	}
// });

// router.put("/:pId", async (req, res) => {
// 	try {
// 		const { pId } = req.params;
// 		const body = req.body;
// 		const productById = await productModel.updateProduct(pId, body);

// 		return res.status(200).send({
// 			status: "success",
// 			payload: { productById },
// 			message: "product updated successfully",
// 		});
// 	} catch (error) {
// 		res.status(404).send({ status: 404, error: error.message });
// 	}
// });
// router.delete("/:pId", async (req, res) => {
// 	try {
// 		const { pId } = req.params;
// 		const productById = await productModel.deleteProduct(pId);
// 		return res.status(200).send({
// 			status: "success",
// 			payload: { productById },
// 			message: "product deleted successfully",
// 		});
// 	} catch (error) {
// 		res.status(404).send({ status: 404, error: error.message });
// 	}
// });

// module.exports = router;