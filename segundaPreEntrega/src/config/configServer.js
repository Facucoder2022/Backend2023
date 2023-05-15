const {connect} = require('mongoose')

module.exports = {
    connectDb: ()=>{
        connect('mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/?retryWrites=true&w=majority')
        console.log('Base de datos conectada')
    }
}
