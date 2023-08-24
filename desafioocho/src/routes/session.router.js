const {Router} = require('express')
const { auth } = require('../utils/middlewares/authentication.middleware')
const { userModel } = require('../dao/model/users.model')
const { createHash, isValidPassword } = require('../utils/bcryptHash')
const passport = require('passport')
const {login, register} = require('../controllers/sessions.controller')
const router = Router()


// login
router.post('/login', login)
router.post('/register', register)

// router.post('/login', passport.authenticate('login', {failureRedirect: '/faillogin'}), async (req,res) => {
//     console.log('Falló la estrategia') 
//     if (!req.user) return res.status(401).send({status: 'error', message: 'invalid credencial'})
//     req.session.user= {
//         first_name: req.user.first_name,
//         last_name: req.user.last_name,
//         email: req.user.email
//     }
//     res.send({status: 'success', message: 'User logedIn'})
// })

router.get('/faillogin', async (req,res)=>{
    console.log('Falló la estrategia')
    res.send({status: 'error', error: 'falló autenticación'})
})


// succesRedirect
router.post('/register', passport.authenticate('register', {failureRedirect: '/failregister'}), async (req,res) => {    
    res.send({status: 'success', message: 'User registered'})
})

router.get('/failregister', async (req,res)=>{
    console.log('Falló la estrategia')
    res.send({status: 'error', error: 'falló autenticación'})
})


router.get('/logout', (req, res)=>{
    req.session.destroy(err=>{
        if (err) {
            return res.send({status: 'error', error: err})
        }
        res.send('logout ok')
    })
})


router.post('/restaurarpass', async (req, res) => {
    const { email, password } = req.body;
  
    // Encontrar el usuario por correo electrónico
    const userDB = await userModel.findOne({ email });
  
    if (!userDB) {
      // Si el usuario no existe, redireccionar a una página de error
      return res.status(401).send({status: 'error', message: 'El usuario no existe'})
    }    
  
    //Hasear Actualizar la contraseña del usuario
    userDB.password = createHash(password)
    await userDB.save()
  
    // Redireccionar al usuario a la página de login
    res.status(200).json({status: 'success', message:'Contraseña actualizada correctamente'});
  })



// sesiones 
router.get('/counter', (req, res)=> {
    if (req.session.counter) {
        req.session.counter ++
        res.send(`se ha visitado el sitio ${req.session.counter} veces.`)
    } else {
        req.session.counter = 1
        res.send('Bienvenido')
    }
})

router.get('/privada', auth,(req,res) => {

    res.send('Todo lo que esta acá solo lo puede ver un admin logueado')
})

module.exports = router


// const { Router } = require('express')
// const {login, register} = require('../controllers/sessions.controller')
// const userManager = require('../dao/user.mongo')
// const { isValidPassword, createHash } = require('../utils/bcryptHash')


// // sirve para usar en las rutas que necesitan protección
// const { passportAuth } = require('../passport-jwt/passportAuth')
// const { authorizaton } = require('../passport-jwt/passportAuthorization')




// const router = Router()

// router.post('/login', async (req, res) => {
//     console.log("etoy", req.body)
//     const { email, password } = req.body;

  
//     try {

//        const user = await userManager.getUserByEmail(email);
//        console.log("user", user);
       
//        const pasValid =  isValidPassword(password, user);
//       if (!user ||  !pasValid) {
 
//        return res.status(401).json({ status: 'error', message: 'Credenciales inválidas' });
//    }
  
    
//       res.status(200).json({ status : "Bienvenido usuario " + user.first_name });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ status: 'error', message: 'Error en el servidor' });
//     }
//   });
  
//   router.post('/register', async (req, res) => {
//     console.log("etoy", req.body)
//     const { first_name, last_name, email, password } = req.body;
  
//     try {

//        const passwordHash = createHash(password);
//        const user = await userManager.addUser({first_name, last_name, email, password: passwordHash});
//        console.log("user", user);

//       if (!user ) {

//        return res.status(401).json({ status: 'error', message: 'Error, no se creo el usuario' });
//    }

//       res.status(200).json({ status : "Usuario " + user.first_name + " creado con exito"});
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ status: 'error', message: 'Error en el servidor' });
//     }
//   });
  
// // router.post('/login', login)

// router.post('/register', register)
    
// router.get('/current', 
//         passportAuth('jwt'), 
//         authorizaton('admin'),
//         (req, res)=> {
//             res.send('current')
//     })
//     router.get('/allUsers', passportAuth('jwt'), authorizaton('user'),async (req,res)=>{
//         try {
//             const users = await userManager.getUsers()
//             res.status(200).send({
//                 status: 'success',
//                 payload: users
//             })
            
//         } catch (error) {
//             cconsole.log(error)
//         }
//     })

// module.exports = router
