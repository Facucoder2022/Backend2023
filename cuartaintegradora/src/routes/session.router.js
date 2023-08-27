const { Router } = require('express')
const sessionsController = require('../controllers/sessions.controller')

const router = Router()

router.post('/register',sessionsController.register)
router.post('/login',sessionsController.login)
router.get('/current',sessionsController.current)
router.get('/unprotectedLogin',sessionsController.unprotectedLogin)
router.get('/unprotectedCurrent',sessionsController.unprotectedCurrent)

module.exports = router

