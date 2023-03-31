let productos = []

class ProductManager {
    constructor (){
        this.products=productos
    }

    addProduct(newProduct){

        if (!newProduct.title ||
            !newProduct.description ||
            !newProduct.price ||
            !newProduct.thumbnail ||
            !newProduct.code ||
            !newProduct.stock ) return 'todos los campos son necesarios'

        let product = this.products.find(prod => prod.code === newProduct.code)
        if(product) return 'Un producto con este code ya fue ingresado'

        return this.products.push({id: this.products.length+1, ... newProduct})
    }
    getProducts(){
        return this.products
    }
    getProductById(id){
        let product = this.products.find(prod => prod.id === id)
        if (!product) return 'Product Not Found'
        return product
    }
}

const product = new ProductManager()

product.addProduct({
    title: 'Producto 1',
    description: 'Sin descripcion',
    price: 1800,
    thumbnail: 'Sin imagen',
    code: 400,
    stock: 10
})
product.addProduct({
    title: 'Producto 2',
    description: 'Sin descripcion',
    price: 2800,
    thumbnail: 'Sin imagen',
    code: 500,
    stock: 8
})

console.log(product.getProducts());
