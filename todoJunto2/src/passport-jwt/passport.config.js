// const passport = require('passport')
// const local = require('passport-local')
// const GithubStrategy = require ('passport-github2')
// const { userModel } = require('../dao/model/users.model')
// const { createHash, isValidPassword } = require('../utils/bcryptHash')
// require ('dotenv').config()

// const LocalStrategy = local.Strategy

// const initPassport = () => {
//     // vamos a conf  registro 
//     passport.use('register', new LocalStrategy({
//         passReqToCallback: true,
//         usernameField: 'email'
//     }, async (req, username, password, done)=>{
//         const {firts_name, last_name} = req.body
//         try {
//             let userDB = await userModel.findOne({email: username})
//             if (userDB) return done(null, false)

//             let newUser = {
//                 firts_name,
//                 last_name,
//                 email: username,
//                 password: createHash(password)
//             }

//             let result = await userModel.create(newUser)
//             return done(null, result)
//         } catch (error) {
//             return done('Error al obtener el usuario'+error)
//         }

//     }))

//     passport.serializeUser((user, done)=>{
//         done(null, user._id)
//     })

//     passport.deserializeUser(async (id, done)=>{
//         let user = await userModel.findOne({_id:id})
//         done(null, user)
//     })

// const initPassportGithub = () => {
//     passport.use('github', new GithubStrategy({
//         clientID: process.env.GITHUB_CLIENT_ID,
//         clietnSecret:process.env.GITHUB_CLIENT_SECRET,
//         callbackURL: process.env.GITHUB_CALLBACK_URL
//     }, async (accessToken, refreshToken, profile, done)=>{
//         console.log('Profile', profile)
//         try {
//             let user = await userModel.findOne({email: profile._json.email})
//             if(!user){
//                 let newUser = {
//                     firts_name: profile.username,
//                     last_name: profile.username,
//                     email: profile._json.email,
//                     password: ''
//                 }
//                 let result = await userModel.create(newUser)
//                 return done(null, result)
//             }
//             return done(null, user)
//         } catch (error) {
//             console.log(error)
//         }
//     }))
//     passport.serializeUser((user, done)=>{
//         done(null, user._id)
//     })

//     passport.deserializeUser(async (id, done)=>{
//         let user = await userModel.findOne({_id:id})
//         done(null, user)
//     })

// }

// module.exports = {
//     initPassport,
//     initPassportGithub
// }

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
            console.log('JWT Payload:', jwt_payload); // Agregar esta línea
            console.log('Config Private Key:', config.privateKey);
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

