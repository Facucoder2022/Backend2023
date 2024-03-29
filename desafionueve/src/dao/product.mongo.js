const { ProductModel } = require("./model/product.model")

class ProductDaoMongo {
    constructor() {
		this.productModel = ProductModel;
	}
    
    async getProducts(){
        try{
            return await productModel.find({})
        }catch(err){
            return new Error(err)
        }
    }
    async getProductById(pid){
        try {            
            return await productModel.findOne({_id: pid})
        } catch (error) {
            return new Error(error)
        }

    }
    async addProduct(newProduct){
        try {
            
            return await productModel.create(newProduct)
        } catch (error) {
            return new Error(error)
        }
    }
    async updateProduct(pid){}
    async deleteProduct(pid){}
}

module.exports = new ProductDaoMongo
