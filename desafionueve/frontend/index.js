console.log('index.js')

fetch('http://localhost:8080/api/productos', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    // body: {
    //     'nombre': 'Federico'
    // }
}) // GET
    .then(respuesta => respuesta.json())
    .then(respuesta =>{ 
        console.log(respuesta.payload)
        let html = ``
        const porductList = document.querySelector('#porductList')
        respuesta.payload.map(product => {
            return html+= `
            <div class="card w-25">
                <div class="card-header">
                    ${product.title}
                </div>
                <div class="card-body">
                    Precio: ${product.price}
                </div>
                <div class="card-footer">
                    <button class="btn btn-outline-primary w-100">Detalle</button>
                </div>
            </div>`
        })
        porductList.innerHTML = html

    })
    .catch(error => console.log(error))