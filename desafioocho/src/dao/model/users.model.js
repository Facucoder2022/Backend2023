/// esquema 
const { Schema, model } = require('mongoose')
// const Cart = require('./cart.model');


const collection = 'usuarios'

const userSchema = new Schema({
    first_name: {
        type: String,
        index: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required:[true, "Email is required"],
        unique: true,
    },
    age: {
        type: Number
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['user','admin'],
        default:'user'
    }
})

const userModel = model(collection, userSchema)

module.exports = {
    userModel
}