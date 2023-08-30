const jwt = require('jsonwebtoken')

exports.authentication = (req, res, next) => {
    // ejemplo de como obtener el token de la cookie
    console.log(req.cookies)
    const token = req.cookies['coderCookie']
    if (!token) {
        return res.status(401).json({ error: 'No token provided' })
    }

    // // Ejemplo de como obtener el token del header
    // // const authHeader = req.headers['authorization']
    
    // // if (!authHeader) {
    // //     return res.status(401).json({ error: 'No token provided' })
    // // }
    // // const token = authHeader.split(' ')[1]    
    
    jwt.verify(token, 'tokenSecretJWT', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token provided' })
        }
        console.log(decoded)
        req.user = decoded
    })
    // console.log(req.user)
    next()
}
