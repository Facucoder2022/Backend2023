const { createTransport } = require('nodemailer')
const { config } = require('../config/configServer')

const transport = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.gmail_mail_admin,
        pass: config.gmail_app_password
    }
})

let from = `Servicio de email <${config.gmail_mail_admin}>`

exports.sendEmail = async (email, subject, html) => {
    return await transport.sendMail({
        from,
        to: email,
        subject,
        html
    })
}
