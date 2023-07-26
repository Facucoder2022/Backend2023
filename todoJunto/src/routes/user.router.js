const {Router} =require('express')

const router =  Router()

router.get('/', (req,res)=>{
    res.send('Bienvenido a usuarios')
})


module.exports = router