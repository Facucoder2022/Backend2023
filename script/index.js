class ProductManager{
    productos = [];
    constructor() {
    }

    getProductos(){
        return this.productos
    }
    addProduct = (title,description,price,thumbnail,code,stock) => {
        if (!findProductByCode (code)){
        let producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }


        if (this.producto.length===0){
            producto.id=1;
        }else{
            producto.id = this.producto[this.producto.length-1].id +1;
        }
        this.productos.push(producto);}
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

function cargarEvento(){
    
    $("#btnMostrarProductos").click(MostrarProductos);
    $("#bntCargarProducto1").click(CargarProducto1);
    $("#divMostrarError").html("Error, para mostrar");
}

function MostrarProductos(){
    let imprimir = "MostrandoProductos";
    BorrarTextos();
    let productos = ProductManager.getProductos();
    console.log (productos);
    $("#divMostrarProductos").html(imprimir);
}

function CargarProducto1(){
    let imprimir = "CargarProducto1";
    BorrarTextos();
    $("#divMostrarProductoCargado").html(imprimir);
}

function BorrarTextos(){
    $("#divMostrarProductoCargado").html("");
    $("#divMostrarError").html("");
    $("#divMostrarProductos").html("");
}




