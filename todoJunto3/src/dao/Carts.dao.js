const { cartModel } = require("./models/Carts");

class Carts {
    
    get = (params) => {
        return cartModel.find(params).populate('products.product');
    }

    getBy = (params) => {
        return cartModel.findOne(params).populate('products.product');
    }

    save = (doc) => {
        return cartModel.create(doc);
    }

    update = (id, doc) => {
        return cartModel.findByIdAndUpdate(id, { $set: doc }, { new: true }).populate('products.product');
    }

    delete = (id) => {
        return cartModel.findByIdAndDelete(id);
    }
}

module.exports = Carts;

