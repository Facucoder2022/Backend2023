/// esquema 
const {Schema, model} = require('mongoose')

const collection = 'usuarios'

const userSchema = new Schema({// 
    first_name: {
        type: String,
        index: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: { 
        type : String ,
        optional : true
    }
})

const userModel = model(collection, userSchema)

module.exports = {
    userModel
}