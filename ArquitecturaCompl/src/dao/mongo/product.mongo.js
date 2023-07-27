const { productsModel } = require("./models/product.model")

class ProductDaoMongo{
    constructor(){
        this.model = productsModel
    }
    async get(){
        return await this.model.find({})
    }
    async getById(pid){
        return await this.model.find({_id: pid})
    }
    async create(newProduct){
        return await this.model.create(newProduct)
    }
    async update(){}
    async delete(){}

}

module.exports = ProductDaoMongo