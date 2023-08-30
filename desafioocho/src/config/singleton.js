const mongoose = require('mongoose')

class MongoSingleton {
    static #instance 
    constructor(){
        mongoose.connect('mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
    static getInstance(){
        if (this.#instance) {
           console.log('Base de datos ya creada') 
           return this.#instance
        }
        this.#instance = new MongoSingleton()
        console.log('Base de datos creada.')
        return this.#instance
    }


}

module.exports = {
    MongoSingleton
}