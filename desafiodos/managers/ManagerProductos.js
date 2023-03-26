import fs from 'fs';

const path = './files/Productos.json'
export default class ManagerProductos {
    consultarProductos = async () => {
        if (fs.existsSync(path)) {
            const data = await fs.promises.readFile(path, 'utf-8');
            console.log(data);
            const users = JSON.parse(data);
            return users;
        }
        else{
            return [] //No hay usuarios porque no hay archivo, pero eso no nos limita a enviar un arreglo vacío.
        }
    }
    crearProducto = async (producto) => {
        const users =  await this.consultarProductos();
        if(users.length===0){
            producto.id=1;
        }else{
            producto.id = users[users.length-1].id+1;
        }
        users.push(producto);
        await fs.promises.writeFile(path,JSON.stringify(users,null,'\t'));
        return producto;
    }
}
