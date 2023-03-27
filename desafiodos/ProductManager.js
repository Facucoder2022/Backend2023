import ManagerProductos from "./managers/ManagerProductos.js";
import ManagerProductos from "./managers/ManagerProductos.js";

const manager = new ManagerProductos();
const env = async() =>{
    let primeraConsultaProductos = await manager.consultarProductos();
    console.log(primeraConsultaProductos);
    let user = {
		tilte: "Buzo",
		description: "buzo de chicago bulls",
		price: 2500,
		thumbnail: "Sin imagen",
		code: 1,
        stock: 10
    }
    let result = await manager.crearProducto(user);
    console.log(result);
    let segundaConsultaProductos = await manager.consultarProductos();
    console.log(segundaConsultaProductos);
}
env();
