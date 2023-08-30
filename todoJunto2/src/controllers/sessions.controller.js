const { generateToken } = require("../utils/generateTokenJwt")


class SessionController {

    login = (req, res)=>{
        
        const {email, password} = req.body
       

        
        // generateToken
        const user = {
            first_name: 'Facu',
            last_name: 'Manta', 
            role: 'user',
            email: 'fm@gmail.com'
        }

        const token = generateToken(user)
        console.log('Generated token:', token);
        
        res.cookie('coderCookieToken', token, {
            maxAge: 60*60*10000,
            httpOnly: true
        }) .send({
             status: 'success',
             token,
        //     redirectTo: '/home' 
         })
       //res.redirect('/home'); 
    }

    register = (req, res)=>{

        const user = {
            first_name: 'Facu',
            last_name: 'manta', 
            role: 'user',
            email: 'fm@gmail.com'
        }

        const token = generateToken(user)
        console.log('Generated token:', token);

        res.send({
            status: 'success',
            token
        })
    }
}


module.exports = new SessionController()