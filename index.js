class ProductManager{
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }

    static variablesEstaticas = 'hola'
    mostrar(){
        return 'hola esto soy una persona'
    }

    getProductoCompleto(){
        return `${this.title}  ${this.description} ${this.price} ${this.thumbnail} ${this.code} ${this.stock}`
    }

} 

const producto = new Producto('Buzo', 'Buzo XL de los Chicago Bulls', '$2500', 'img/buzochicago.png', 'ABH1234', '10')
console.log(producto.title)
console.log(producto.description)
console.log(producto.price)
console.log(producto.thumbnail)
console.log(producto.code)
console.log(persona.stock)
console.log(persona.mostrar())
console.log(persona.getProductoCompleto())


const producto2 = new Producto('Short', 'Short L de los Golden State Warriors', '1500', 'img/warriorsshort.png', 'ABH5461', '10')
console.log(producto.title)
console.log(producto.description)
console.log(producto.price)
console.log(producto.thumbnail)
console.log(producto.code)
console.log(persona.stock)
console.log(persona.mostrar())
console.log(persona.getProductoCompleto())

const producto3 = new Producto('Championes', 'Championes de basket talle 45 Kyrie Irving', '4500', 'img/championesbasket.png', 'ABH4789', '8')
console.log(producto.title)
console.log(producto.description)
console.log(producto.price)
console.log(producto.thumbnail)
console.log(producto.code)
console.log(persona.stock)
console.log(persona.mostrar())
console.log(persona.getProductoCompleto())


console.log(Producto.variablesEstaticas)
console.log(Date.now())

