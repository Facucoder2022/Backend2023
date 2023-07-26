const { config } = require('../config/configServer')
let ProductDao 
let UserDao 

switch ('mongo') {
    case 'mongo':
        config.connectDb()
        ProductDao = require("./mongo/product.mongo") 
        break;

    default:
        break;
}

module.exports = {
    ProductDao
}
