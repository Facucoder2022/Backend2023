const { Router } = require("express");
// const productModel = require("../ProductManager");
const productManager = require("../dao/product.mongo");

const router = Router();

router.get('/', async (req,res)=>{
    try {
        const products = await productManager.getProducts()
        res.status(200).send({
            status: 'success',
            payload: products
        })
        
    } catch (error) {
        console.log(error)
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

router.get('/products', async (req,res)=>{
    let page = parseInt(req.query.page);
    if(!page) page=1;
    let result = await productModel.paginate({},{page,limit:5,})

            result.prevLink = result.hasPrevPage?`http://localhost:8080/products?page=${result.prevPage}`:'';
            result.nextLink = result.hasNextPage?`http://localhost:8080/products?page=${result.nextPage}`:'';
            result.isValid= !(page<=0||page>result.totalPages)
            res.render('products',result)
        })

module.exports = router


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