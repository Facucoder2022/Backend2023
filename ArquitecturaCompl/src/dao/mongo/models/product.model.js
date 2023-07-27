const mongoose = require('mongoose')

const collection = 'products'

const productsSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String, 
    stock: Number,
    imageUrl: String,
    category: String
})

const productsModel = mongoose.model(collection, productsSchema)

module.exports = {
    productsModel
}