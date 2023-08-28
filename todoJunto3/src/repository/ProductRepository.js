const GenericRepository = require("./GenericRepository.js")

class ProductRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }
}

module.exports = ProductRepository