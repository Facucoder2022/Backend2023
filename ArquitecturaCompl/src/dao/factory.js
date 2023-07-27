const mongoose = require('mongoose')
let ProductDao

switch ('mongo') {
    case 'mongo':
        // conección
        mongoose.connect('mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce')
        console.log('db conectada')

        const ProductDaoMongo = require('./mongo/product.mongo')

        ProductDao = ProductDaoMongo
        break;

    default:
        break;
}

module.exports = {
    ProductDao
}