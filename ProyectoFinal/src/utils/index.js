const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {fileURLToPath} = require('node:url')
const { dirname } = require('node:path')

exports.createHash = async(password) =>{
    const salts = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salts);
}

exports.passwordValidation = async(user,password) => bcrypt.compare(password,user.password);

exports.generateToken = async(user) => {
    const token = jwt.sign(user,'tokenSecretJWT',{expiresIn:"1h"})
    return token;
}
