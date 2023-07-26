const { generateToken } = require("../utils/generateTokenJwt")


class SessionController {

    login = (req, res)=>{
        const {email, password} = req.body
        console.log('email', req);
        console.log('password', password);
        // generateToken
        const user = {
            first_name: 'Facu',
            last_name: 'Manta', 
            role: 'user',
            email: 'fm@gmail.com'
        }

        const token = generateToken(user)
        
        res.cookie('coderCookieToken', token, {
            maxAge: 60*60*10000,
            httpOnly: true
        }).send({
            status: 'success',
            token
        })
    }

    register = (req, res)=>{

        const user = {
            first_name: 'Facu',
            last_name: 'manta', 
            role: 'user',
            email: 'fm@gmail.com'
        }

        const token = generateToken(user)
        res.send({
            status: 'success',
            token
        })
    }
}


module.exports = new SessionController()

