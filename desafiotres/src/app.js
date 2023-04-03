import express from 'express'

const port = 8080
const app = express()
const product = new ProductManager("./files/Productos.json")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", async (req, res) => {
    try {
        const usuarios = await product.getProducts ()
        res.send({usuarios})
    }catch (error){
        console.log(error)
    }
})