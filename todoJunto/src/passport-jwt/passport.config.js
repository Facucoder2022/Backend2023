const passport = require('passport')
const passportJWT = require('passport-jwt')
const { config } = require('../config/configServer')

const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

let cookieExtractor = (req) => {
    console.log(req)
    let token = null
    if (req && req.cookies) {
        token = req.cookies['coderCookieToken']
    }
    return token
}

const initializePassport = () =>{

    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: config.privateKey
    }, async (jwt_payload, done)=>{
        try {
            done(null, jwt_payload)
        } catch (error) {
            return done(error)
        }
    }))

    // passport.serializeUser()
    // passport.deserializeUser()
}

module.exports= {
    initializePassport
}