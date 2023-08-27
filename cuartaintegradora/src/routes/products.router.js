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
