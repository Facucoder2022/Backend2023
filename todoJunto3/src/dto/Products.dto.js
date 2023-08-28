class ProductDTO {
    static getProductsInputFrom = (product) =>{
        return {
            title:product.title||'',
            description:product.description||'',
            thumbnail: product.thumbnail||'',
            price:product.price||'',
            stock:product.stock||'',
            code:product.code||''    
        }
    }
}

module.exports = ProductDTO