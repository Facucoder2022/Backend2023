const mongoose = require('mongoose')


const collection = 'products'

const schema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true
    },
    description: String,
    thumbnail: String, 
    price: Number, 
    stock: Number, 
    code: {
        type: String,
        unique: true,
        required: true
    },
    })

const productModel = mongoose.model(collection, schema);

module.exports = {
    productModel
}
