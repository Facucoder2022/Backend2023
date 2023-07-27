const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()


app.use(express.static('public'))   
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.use(router)

app.listen(8080, () => {
    console.log('Example app listening on port 8080!')
}) 

