const {Router} = require('express')
// const { auth } = require('../utils/middlewares/authentication.middleware')
// const { userModel } = require('../dao/model/users.model')
// const { createHash, isValidPassword } = require('../utils/bcryptHash')
const { passportAuth } = require('../passport-jwt/passportAuth')
const { authorizaton } = require('../passport-jwt/passportAuthorization')

// const passport = require('passport')
const {login, register} = require('../controllers/sessions.controller')

// const { CustomError } = require('../service/CustomError')
// const { generateUserErrorInfo } = require('../service/info')
// const { EError } = require('../service/EError')


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


// login
// router.post('/login', login)
// router.post('/register', register)


// router.get('/faillogin', async (req,res)=>{
//     cconsole.log = (message) =>{
//         req.logger.info(message);
//     }
//     res.send({status: 'error', error: 'falló autenticación'})
// })


// // succesRedirect
// router.post('/register', passport.authenticate('register', {failureRedirect: '/failregister'}), async (req,res) => {    
//     res.send({status: 'success', message: 'User registered'})
// })

// router.get('/failregister', async (req,res)=>{
//     console.log = (message) =>{
//         req.logger.info(message);
//     }
//     res.send({status: 'error', error: 'falló autenticación'})
// })


// router.get('/logout', (req, res)=>{
//     req.session.destroy(err=>{
//         if (err) {
//             return res.send({status: 'error', error: err})
//         }
//         res.send('logout ok')
//     })
// })


// router.post('/restaurarpass', async (req, res) => {
//     const { email, password } = req.body;
  
//     // Encontrar el usuario por correo electrónico
//     const userDB = await userModel.findOne({ email });
  
//     if (!userDB) {
//       // Si el usuario no existe, redireccionar a una página de error
//       return res.status(401).send({status: 'error', message: 'El usuario no existe'})
//     }    
  
//     //Hasear Actualizar la contraseña del usuario
//     userDB.password = createHash(password)
//     await userDB.save()
  
//     // Redireccionar al usuario a la página de login
//     res.status(200).json({status: 'success', message:'Contraseña actualizada correctamente'});
//   })



// // sesiones 
// router.get('/counter', (req, res)=> {
//     if (req.session.counter) {
//         req.session.counter ++
//         res.send(`se ha visitado el sitio ${req.session.counter} veces.`)
//     } else {
//         req.session.counter = 1
//         res.send('Bienvenido')
//     }
// })

// router.get('/privada', auth,(req,res) => {

//     res.send('Todo lo que esta acá solo lo puede ver un admin logueado')
// })


// router.post('/register', async (req, res, next) => {
//     try {
//         const {first_name, last_name, email} = req.body 
        
//         //validar si vienen distintos de vacios && caracteres especiales
//         if (!first_name || !last_name || !email) {
//             CustomError.createError({
//                 name: 'User creation error',
//                 cause: generateUserErrorInfo({
//                     first_name, 
//                     last_name,
//                     email
//                 }),
//                 message: 'Error trying to created user',
//                 code: EError.INVALID_TYPE_ERROR
//             })
//         }
    
       
    
//         let token = generateToken({
//             first_name: 'Facu',
//             last_name: 'Manta',
//             email: 'fmanta@gmail.com'
//         })
    
    
//         res.status(200).send({
//             status: 'success',
//             message: 'Usuario creado correctamente',
//             token
//         })
//     } catch (error) {
//         next(error)
//     }
   
// })




// module.exports = router

