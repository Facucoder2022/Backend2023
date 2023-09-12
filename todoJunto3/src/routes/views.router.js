const { Router } = require('express')
const Users = require('../dao/Users.dao')


const router = Router();
const userService = new Users();

const authenticationMiddleware = (req,res,next) =>{
    const jwtCookie = req.cookies['CoderCookie'];
    if(jwtCookie) next()
    else return res.status(401).send('Not authenticated');
}

// router.get('/',(req,res)=>{
//     res.render('home');
// })

 router.get('/', (req, res) =>{
     let testUser = {
         name: "Facu",
         last_name : "Manta"
     }
     res.render('index', testUser);
 })

router.get('/home', async (req, res) =>{
    let products = await getProducts();
    console.log = (message) =>{
        req.logger.info(message);
    }
    res.render('home', { products });
})


router.get('/register', (req, res) =>{
    let testUser = {
        name: "Facu",
        last_name : "Manta"
    }
    res.render('registerForm', testUser);
})

router.get('/login', (req, res) =>{
    let testUser = {
        name: "Facu",
        last_name : "Manta"
    }
    res.render('login', testUser);
})

router.get('/profile/:uid', authenticationMiddleware ,async(req,res)=>{
    const {uid} = req.params;
    const user = await userService.getUserById(uid);
    res.render('profile',{user})
})

module.exports = router