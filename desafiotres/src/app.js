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

app.post("api/productos", async (req, res)=>{
    let product = req.body

    if(!product.nombre || !product.apellido){ 
        return res.status(400).send({status:'error', mensaje: 'todos los campos son necesarios'})
    }
    products.push(user)
    res.status(200).send({products})
})


app.put("api/productos/:pid", async (req, res) => {
    const { pid } = req.params
    const product = req.body

    if(!product.id){ 
        return res.status(400).send({status:'error', mensaje: 'todos los campos son necesarios'})
    }

    const index = products.findIndex(product => product.id === pid)   

    if(index === -1) res.send({status: 'error', message: 'No existe el usuario'})

    products[index] = {id: pid, ...product}

    res.send({products})
})



app.delete("api/productos/:pid", async (req, res) => {
    let {pid} = req.params
 
    const index = usuarios.findIndex(product => product.id === pid)   

    if(index === -1) res.send({status: 'error', message: 'No existe el usuario'})

    products = products.filter(product => product.id !== pid)

    res.send({status: 'success', payload: productos})
})

app.use("/api/cart", cartRouter);


app.listen(8080, ()=>{
    console.log('Escuchando en el puerto 8080')
})
