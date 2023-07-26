const { productModel } = require("./model/product.model")


class ProductDaoMongo {
    
    async get(){
        try{
            return await productModel.find({})
        }catch(err){
            return new Error(err)
        }
    }
    async getById(pid){
        try {            
            return await productModel.findOne({_id: pid})
        } catch (error) {
            return new Error(error)
        }

    }
    async create(newProduct){
        try {            
            return await productModel.create(newProduct)
        } catch (error) {
            return new Error(error)
        }
    }
    async update(pid){}
    async delete(pid){}
}

module.exports = ProductDaoMongo