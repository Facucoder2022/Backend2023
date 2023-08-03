const {connect} = require('mongoose')

module.exports = {
    privateKey: 'comision39750', // procees.env.PRIVATE_KEY
    connectDb: ()=>{
        connect('mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce', {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('Base de datos conectada')
    }
}



