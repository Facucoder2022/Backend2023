const fs = require ("fs");
const { data } = require("jquery");

class ProductManager{
    
    constructor() {
        this.productos = [];
        this.path = "./files/Productos.json"
    }

    getProductos = async () => {
        let data = [];
        await fs.promises
        .readFile(this.path, "utf-8")
        .then((response) => data.push(JSON.parse(response)));

        return data
    };

    validateProduct(newProduct) {
        const productKeys = [
            "tilte",
            "description",
            "price",
            "thumbnail",
            "code",
            "stock",
        ];

        let validationResult = true;
    }
    addProduct = (title,description,price,thumbnail,code,stock) => {
        
        let producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }


        if (this.productos.length===0){
            producto.id=1;
        }else{
            producto.id = productos[productos.length-1].id +1;
        }
        this.productos.push(producto);
    }

    findProductByCode = (id) => {
        encontre = false
        i=0
        while (i<this.productos.length && !encontre){
            if (this.productos[i].id==id){
                encontre=true
            }
            i++;
        }
        return encontre;
    }
}

$(document).ready(cargarEvento)

let manager;
function cargarEvento(){

    manager = new ProductManager(); 
    
    $("#btnMostrarProductos").click(MostrarProductos);
    $("#bntCargarProducto1").click(CargarProducto1);
    $("#divMostrarError").html("Error, para mostrar");
}

function MostrarProductos(){
    const productos = manager.getProductos(); 
    console.log(productos);
    let imprimir = "MostrandoProductos";
    BorrarTextos();
    $("#divMostrarProductos").html(imprimir);
}

function CargarProducto1(){
    manager.addProduct("Buzo", "buzo de chicago bulls", "2500", "", "1111", "10")
    let imprimir = "Se cargo el producto con exito";
    BorrarTextos();
    $("#divMostrarProductoCargado").html(imprimir);
    
}

function BorrarTextos(){
    $("#divMostrarProductoCargado").html("");
    $("#divMostrarError").html("");
    $("#divMostrarProductos").html("");
}



const productManager = new ProductManager();

const productoUno = {
    title: "producto uno",
    description: "sin descripcion",
    price: 1500,
    thumbnail: "sin foto",
    code: "asd1234",
    stock: 10,
};

const productoDos = {
    title: "producto dos",
    description: "sin descripcion",
    price: 2500,
    thumbnail: "sin foto",
    code: "asd456",
    stock: 8,
}

productManager.getProductos();
