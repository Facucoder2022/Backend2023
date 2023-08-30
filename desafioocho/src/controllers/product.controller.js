const { productService } = require("../service")
const { sendEmail } = require("../utils/sendMail")

class ProductController {
    constructor(){
        this.productService = productService
    }
    getProducts = async (req,res)=>{
        try {
            const products = await  this.productService.getProducts()
            res.status(200).send({
                status: 'success',
                payload: products
            })
            
        } catch (error) {
            cconsole.log(error)
        }
    }
    getProduct = async (req,res)=>{
        try {
            const {pid} = req.params
            let product = await  this.productService.getProductById(pid)
            res.status(200).send({
                status: 'success',
                payload: product
            })
        } catch (error) {
            console.log(error)
        }
    }
    createProduct = async (req,res)=>{
        try {
            const newProduct = req.body

            let result = await  this.productService.createProduct(newProduct)

            let subject = 'Nuevo Producto Creado'
            let html = `<h1>Producto ${newProduct.title} creado con éxito</h1>`
            sendEmail('projectodigitalgen@gmail.com',subject, html )

            res.status(200).send({
                status: 'success',
                payload: result
            })
        } catch (error) {
            console.log(error)
        }
    }
    updateProduct = (req,res)=>{
        res.status(200).send('Actualizar productos')
    }
    deleteProduct = (req,res)=>{
        res.status(200).send('Borrar productos')
    }
}

module.exports = new ProductController()