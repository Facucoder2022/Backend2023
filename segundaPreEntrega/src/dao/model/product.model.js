const {Schema, model} = require('mongoose')
const moongoosePagiante = require('mongoose-paginate-v2')

const collection = 'products'

const productSchema = new Schema(
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
    
    //   category: { type: String, enum: ["Jersey", "Short", "Shoes", "Equipment"], lowercase: true },
    //   jersey_size: { type: String, enum: ["XXL", "XL", "L", "M"], lowercase: true },
    //   short_size: { type: String, enum: ["XXL", "XL", "L", "M"], lowercase: true },
    //   shoes_size: { type: String, enum: ["adult man", "adult women", "kids"], lowercase: true },
    //   equipment_size: { type: String, enum: ["XXL", "XL", "L", "M"], lowercase: true },
    // },
    // {
    //     timestamps: true, 
    })

productSchema.plugin(moongoosePagiante);
const productModel = model(collection, productSchema);

module.exports = {
    productModel
}