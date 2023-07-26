const ProductRepository = require("../repositories/product.repository")
const { ProductDao } = require("../dao/factory")

const productService = new ProductRepository(new ProductDao())

module.exports = {
    productService
}