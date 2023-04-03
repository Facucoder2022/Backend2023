let productos = []

import fs from 'fs';
import { parse } from "path";

class ProductManager {
    constructor (){
        this.products=productos
        this.path = './files/Productos.json'
    }

    getProducts = async () => {
        let productsArray = await fs.promises.readFile(this.path, "utf-8")
        return JSON,parse(productsArray);
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
    updateProducts(id, upProd){

        let product = this.products.find(prod => prod.id === id);
        
        if(product){
            product.title=upProd.title;
            product.description=upProd.description;
            product.price=upProd.price;
            product.thumbnail=upProd.thumbnail;
            product.code=upProd.code;
            product.stock=upProd.stock;
            return "Producto actualizado";
        }else{
            return "No se encontre el producto a actualizar";
        }

    }

    deleteProducts(id){

        let productos = this.products.filter(x => x.id != id);
        console.log(productos);
        return this.products = productos;
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

product.updateProducts(1, {
    title: 'Producto 1 Editado',
    description: 'Sin descripcion, Editado',
    price: 1900,
    thumbnail: 'Sin imagen',
    code: 400,
    stock: 10
})

console.log(product.getProducts());