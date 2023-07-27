const { 
    ProductDao 
} = require("../dao/factory")
const ProductRepository = require('../repositories/product.repository.js') 

const productService = new ProductRepository(new ProductDao())

module.exports = {
    productService
}
