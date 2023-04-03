import fs from 'fs';

const path = './files/Productos.json'
export default class ManagerProductos {

    getProducts = async () => {
        if (fs.existsSync(path)) {
            const data = await fs.promises.readFile(path, 'utf-8');
            console.log(data);
            const product = JSON.parse(data);
            return product;
        }
        else{
            return []
        }
    }
    addProduct = async (product) => {
        let product =  await this.product();
        if(product.length===0){
            product.id=1;
        }else{
            product.id = product[product.length-1].id+1;
        }
        product.push(producto);
        await fs.promises.writeFile(path,JSON.stringify(product,null,'\t'));
        return product;
    }
}