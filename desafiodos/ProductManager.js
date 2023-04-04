import fs from "fs"

const products = []
const path = './files/Productos.json'


class ProductManager {
    constructor (){
        this.products=products
        this.path = path
    }

    addProduct(newProduct){
        const productsJSON = fs.readFileSync(this.path, "utf-8")
        const productsParsed = JSON.parse(productsJSON)
        this.products = productsParsed

        if (!newProduct.title ||
            !newProduct.description ||
            !newProduct.price ||
            !newProduct.thumbnail ||
            !newProduct.code ||
            !newProduct.stock ) return 'todos los campos son necesarios'

        let product = this.products.find(prod => prod.code === newProduct.code)
        if(product) return 'Un producto con este code ya fue ingresado'

        this.products.push({id: this.products.length+1, ... newProduct})
        fs.promises.writeFile(path, JSON.stringify(this.products, null, 2), "utf-8")
        return "Producto agregado"
    }

    deleteProduct (path, id) {
        fs.readFile(path, "utf-8",(err,data) => {
            if(err){
                console.log(err)
                return
            }
            const product = JSON.parse(data)
            const index = product.findIndex(product => product.id === id)
            if (index !== -1) {
                product.splice(index, 1)
            } else {
                console.log(`No existe ningún producto con el id ${id}`)
                return
            }
            fs.writeFile(path, JSON.stringify(product, null, 2), "utf-8" , err => {
                if(err) {
                    console.log(err)
                } else {
                    console.log (`Producto removido con el id ${id}`)
                }
            })
        })
    }

    createJsonFile = () => {
        fs.promise.writeFile(path.JSON.stringify([ ... product.products],null,2),"utf-8", (err) => {
            if(err) return console.log (err)
        })
    }

    getProducts = async() => {
        try {
            let data = fs.readFile(path, "utf-8")
            const parseData = JSON.parse(data)
            console.log(parseData)
            return parseData
        } catch (err) {
            console.log(err)
        }
    }

    getProductById(path, id) {
        fs.readFile(path, "utf-8", (err, contenido) => {
            if(err) console.log(err)
            let product = JSON.parse(contenido)
            let productID = product.find(prod => prod.id === id)
            if(!product) return "Producto no ecnotrado"
            console.log("Producto from JSON with id: ",productID)
        })
    }

    updateProducts = async (id, updatedFields) => {
        
        try {
            const products = await fs.promises.readFile(this.path, "utf-8");
            const parsedProducts = JSON.parse (products);
            const index = parsedProducts.findIndex ((p) => p.id === id);

            if (index !== -1) {
                parsedProducts[index] = {... parsedProducts [index], ...updatedFields };
                await fs.promises.writeFile(this.path, JSON.stringify(parsedProducts, null, 2));

                return parsedProducts[index];
            } else {
                console.log(`No existe ningún producto con el id ${id}`);
                return null;
            }
        } catch (error) {
            console.error(error);
        }
    }
}

const product = new ProductManager()
