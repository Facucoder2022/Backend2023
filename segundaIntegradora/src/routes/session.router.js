const { Router } = require('express')
const {login, register} = require('../controllers/sessions.controller')
// sirve para usar en las rutas que necesitan protección
const { passportAuth } = require('../passport-jwt/passportAuth')
const { authorizaton } = require('../passport-jwt/passportAuthorization')


const router = Router()

router
    .post('/login', login)
    .post('/register', register)
    
    .get('/current', 
        passportAuth('jwt'), 
        authorizaton('admin'),
        (req, res)=> {
            res.send('current')
        })


module.exports = router