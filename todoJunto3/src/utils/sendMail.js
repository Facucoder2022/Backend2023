const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'backendmanta2023@gmail.com',
        pass: 'qdwocbcqdgndneai',
    }
})

exports.sendMail = async (to, subject, text)=>{
    return await transport.sendMail({
        from: 'Coder Test <backendmanta2023@gmail.com>',
        to,
        subject,
        text,
        
    })
}
