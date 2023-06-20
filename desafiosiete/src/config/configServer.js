// const {connect} = require('mongoose')
// const { productModel } = require('../dao/model/product.model')
// const { cartModel } = require('../dao/model/cart.model')

// let url = 'mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce'


// module.exports = {
//     connectDb: async () => {
//         try {
//             connect(url)
//             console.log('Base de datos conectadas')


//             //await productModel.create({})
//             let products =  await productModel.paginate({gender: "Female"}, {limit:20, page:1})
            
//             console.log(products)

            
//             const cart = await cartModel.findOne({_id: '6452fbefc7ddcec328f8f962'})            
            
//             //console.log(cart.products[2])

        
            
//         } catch (err) {
//             console.log(err)
//         }
//     }
// }

const {connect} = require('mongoose')
const { productModel } = require('../dao/model/product.model')
const { cartModel } = require('../dao/model/cart.model')

let url = 'mongodb+srv://facumanta10:6VXFGaou1y8F4X8H@fmantabackend.tpf6egh.mongodb.net/miEcommerce'

module.exports = {
    privateKey: 'miEcommerce', // procees.env.PRIVATE_KEY
    connectDb: async ()=>{
        connect(url)
        console.log('Base de datos conectada')

        // let products =  await productModel.create
            
        //      console.log(products)

            
        //      const cart = await cartModel.findOne({_id: '6452fbefc7ddcec328f8f962'})            
            
            //  console.log(cart.products[2])
             
    }
}


