const GenericRepository = require("./GenericRepository.js")

class CartRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }
}

module.exports = CartRepository