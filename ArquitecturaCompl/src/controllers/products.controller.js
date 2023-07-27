const { productService } = require("../services")

class ProductController {

    getProuducts = async  (req, res)=>{
        try {
            const products = await productService.getProducts()
            res.send({
                status: 'success',
                payload: products
            }) 
        } catch (error) {
            console.log(error)
        }
    }
    getProuduct = async (req, res)=>{
        try {
            const {pid} = req.params
            let product = await productService.getProduct(pid)
            res.send({
                status: 'success',
                payload: product
            }) 
        } catch (error) {
            console.log(error)
        }
    }
    createProuduct = async (req, res)=>{
        try {
            const {body} = req
            // console.log(body)
            let  result = await productService.createProduct(body)
            res.send({
                stauts: 'success',
                payload: result
            }) 
        } catch (error) {
            console.log(error)
        }
    }
    updateProuduct = (req, res)=>{
        try {
            res.send('updateProducts') 
        } catch (error) {
            console.log(error)
        }
    }
    deleteProuduct = (req, res)=>{
        try {
            res.send('deleteProducts') 
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = {
    ProductController
}