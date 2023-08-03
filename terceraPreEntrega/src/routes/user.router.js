const { Router } = require('express')
const { auth } = require('../utils/middlewares/authentication.middleware')
const {
    getUsers, 
    createUsers, 
    updateUsers, 
    deleteUsers
} = require('../controllers/users.controller')

const router = Router()

router.get('/',  
    // auth, 
    getUsers
)

router.post('/', createUsers)

router.put('/:uid', updateUsers)


router.delete('/:uid', deleteUsers)

module.exports = router

