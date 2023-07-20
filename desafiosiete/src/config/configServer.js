const {connect} = require('mongoose')


let url = 'mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce'

module.exports = {
    privateKey: 'miEcommerce', // procees.env.PRIVATE_KEY
    connectDb: async ()=>{
        connect(url)
        console.log('Base de datos conectada')
             
    }
}


