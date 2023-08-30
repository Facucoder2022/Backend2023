const Users = require( "../dao/Users.dao")
const Products = require( "../dao/Products.dao")
const Carts = require( "../dao/Carts.dao")

const UserRepository = require( "../repository/UserRepository.js")
const ProductRepository = require( "../repository/ProductRepository.js")
const CartRepository = require( "../repository/CartRepository")

exports.usersService = new UserRepository(new Users())
exports.productsService = new ProductRepository(new Products())
exports.CartsService = new CartRepository(new Carts())
