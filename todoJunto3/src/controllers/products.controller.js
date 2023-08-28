const ProductDTO = require("../dto/Products.dto.js")
const { productsService } = require("../services/index")


const getProducts = async(req,res)=>{
    const products = await productsService.getAll();
    res.send({status:"success",payload:products})
}
const getProductById = async(req,res)=>{
    const {pid} = req.params
    const products = await productsService.getBy({_id: pid});
    res.send({status:"success",payload:products})
}

const addProducts = async(req,res)=> {
    const {title,description,thumbnail,price,stock,code} = req.body;
    if(!title||!description||!thumbnail |!price||!stock||!code) return res.status(400).send({status:"error",error:"Incomplete values"})
    const products = ProductDTO.getProductsInputFrom({title,description,thumbnail,price,stock,code});
    const result = await productsService.create(products);
    res.send({status:"success",payload:result})
}

const updateProducts = async(req,res) =>{
    const productsUpdateBody = req.body;
    const productsId = req.params.pid;
    const result = await productsService.update(productsId,productsUpdateBody);
    res.send({status:"success",message:"products updated"})
}

const deleteProducts = async(req,res)=> {
    const productsId = req.params.pid;
    const result = await productsService.delete(productsId);
    res.send({status:"success",message:"products deleted"});
}


module.exports = {
    getProducts,
    getProductById,
    addProducts,
    updateProducts,
    deleteProducts,
}