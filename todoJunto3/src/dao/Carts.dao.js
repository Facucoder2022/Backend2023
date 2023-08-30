const { cartModel } = require("./models/Carts");

class Carts {
    
    get = (params) => {
        return cartModel.find(params).populate('product');
    }

    getBy = (params) => {
        return cartModel.findOne(params).populate('product');
    }

    save = (doc) => {
        return cartModel.create(doc);
    }

    update = (id, doc) => {
        return cartModel.findByIdAndUpdate(id, { $set: doc }, { new: true }).populate('product');
    }

    delete = (id) => {
        return cartModel.findByIdAndDelete(id);
    }
}

module.exports = Carts;

