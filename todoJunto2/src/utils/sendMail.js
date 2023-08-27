const nodemailer = require('nodemailer')
const config = require('../config/configServer')

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.gmail_user_app,
        pass: config.gmail_pass_app
    }
})

exports.sendMail = async (destino, subject, html)=>{
    return await transport.sendMail({
        from: 'Coder Test <backendmanta2023@gmail.com>',
        to: 'backendmanta2023@gmail.com',
        subject: 'Correo de prueba Backend Manta',
        html,
        html:`<div>
             <h1>Esto es un test</h1>
             </div>`,
        attachments: [{
            filename:'chicago.png',
            path: __dirname + '/images/chicago.png',
            cid:'chicago'
        }]
    })
}
