const Users = require( "../dao/Users.dao")
const Products = require( "../dao/Products.dao")
// const Adoption = require( "../dao/Adoption.js")

const UserRepository = require( "../repository/UserRepository.js")
const ProductRepository = require( "../repository/ProductRepository.js")
// const AdoptionRepository = require( "../repository/AdoptionRepository.js")

exports.usersService = new UserRepository(new Users())
exports.productsService = new ProductRepository(new Products())
// exports.adoptionsService = new AdoptionRepository(new Adoption())
