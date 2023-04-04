import express from 'express'
const ProductManager = require ("./ProductManager")

const port = 8080
const app = express()
const product = new ProductManager("./files/Productos.json")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", async (req, res) => {
    res.status(200).send('<h1>Welcome</h1>')
})

app.get("/api/productos", async (req, res) => {
    try {
        const { limit } = req.query
        const products = await product.getProducts ()
        if (!limit) {
            return res.send({
                status: 'success' ,
                products
            })
        }
        return res.send({
            status: 'success',
            products: products.slice (0, limit)
        })
    }catch (error){
        console.log(error)
    }
})

app.get("/api/productos/:pid", async (req, res) => {
    try {
        const {pid} = req.params
        const productDb = await product.getProductById(parseInt(pid))
        if(!productDb) {
            return res.send ({status: 'error', error: 'Producto no existe'})
        }
        res.send({productDb})
        
    }catch (error){
        console.log(error)
    }
})

app.listen(8080, ()=>{
    console.log('Escuchando en el puerto 8080')
})
