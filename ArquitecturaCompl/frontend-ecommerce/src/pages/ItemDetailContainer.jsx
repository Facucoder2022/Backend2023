import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    const [product, setProdutc] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:8080/api/products/649393d0d111f2c0b73208f7`) 
        .then(resp => resp.json())
        .then(resp => setProdutc(resp.payload[0]))
    }, [])
    console.log(product)
    return (
        <div className="w-25">
            <img src={product.imageUrl} className="w-100"/>
            <p>Nombre: {product.title}</p>
            <p></p>
            <p></p>
        </div>
    )
}

export default ItemDetailContainer