const {Router}   = require('express')
const nodemailer = require('nodemailer')
const config = require('../config/configServer')

const router = Router()

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.gmail_user_app,
        pass: config.gmail_pass_app
    }
})


router.get('/mail', async (req, res) => {
    let result = await transport.sendMail({
        from: 'Coder Test <backendmanta2023@gmail.com>',
        to: 'backendmanta2023@gmail.com',
        subject: 'Correo de prueba Backend Manta',
        html:`<div>
             <h1>Esto es un test</h1>
             </div>`,
        // attachments: [{
        //     // filename:'chicago.png',
        //     // path: __dirname + '/images/chicago.png',
        //     // cid:'chicago'
        // }]

    })
    
    res.send('Email enviado')
})



module.exports = router