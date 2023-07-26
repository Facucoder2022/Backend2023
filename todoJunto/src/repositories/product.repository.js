class ProductRepository {
    constructor(dao){
        this.dao = dao
    }

    getProducts = async () => {
        return await this.dao.get()
    }
    getProduct = async (pid) => {
        return await this.dao.getById(pid)        
    }
    createProduct = async (newProduct) => {
        return await this.dao.create(newProduct)
    }
    updateProduct = async (pid, updateToProduct) => {
        return await this.dao.update(pid, updateToProduct)
    }
    deleteProduct = async (pid) => {
        return await this.dao.delete(pid)
    }
}

module.exports = ProductRepository