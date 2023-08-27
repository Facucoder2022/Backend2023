const Users = require( "../dao/Users.dao")


const UserRepository = require( "../repository/UserRepository")


exports.usersService = new UserRepository(new Users())

