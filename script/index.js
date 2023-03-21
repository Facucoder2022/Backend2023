class ProductManager{
    productos = [];
    constructor() {
    }

    getProductos(){
        return this.productos
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

    findProductByCode = (code) => {
        encontre = false
        i=0
        while (i<this.productos.length && !encontre){
            if (this.productos[i].code==code){
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
    $("#bntCargarProducto2").click(CargarProducto2);
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

function CargarProducto2(){
    manager.addProduct("Short", "short de chicago bulls", "1500", "", "2222", "8")
    let imprimir = "Se cargo el producto con exito";
    BorrarTextos();
    $("#divMostrarProductoCargado").html(imprimir);
    
}

function BorrarTextos(){
    $("#divMostrarProductoCargado").html("");
    $("#divMostrarError").html("");
    $("#divMostrarProductos").html("");
}




