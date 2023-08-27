function auth(req, res, next) {
     console.log('auth',req.session)
    if(req.session?.user?.email === 'admincoder@coder.com' && !req.session?.user?.password === 'adminCoder123'){
        next()
    }
    return res.status(401).send('Error de autenticación')
}

module.exports = {
    auth
}

