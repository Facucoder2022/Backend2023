const {Router}   = require('express')
const { sendMail } = require('../utils/sendMail')
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


router.get('/mockingproducts', (req, res) => {
    const products = generateMockProducts(100);
    res.json(products);
  });

  function generateMockProducts(count) {
    const products = [];
    for (let i = 1; i <= count; i++) {
      products.push({
        _id: i,
        name: `Product ${i}`,
        description: `Description of Product ${i}`,
        code: `CODE-${i}`,
        price: Math.floor(Math.random() * 100) + 1,
        stock: Math.floor(Math.random() * 50) + 1,
      });
    }
    return products;
  }

  router.get('/logger-test', (req, res) => {
    // Lógica de la ruta
    req.logger.info('Acceso a una ruta importante');
    // Más lógica
  });


module.exports = router
