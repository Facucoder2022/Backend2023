exports.generateUserErrorInfo = (user) => {
    return `One or more properties ware incomplete or not valid.
        listado de requirimientos de propiedades del user:
        * first_name: needs to a String, received ${user.first_name}
        * last_name: needs to a String, received ${user.last_name}
        * email: needs to a String, received ${user.email}`
}
exports.generatePoductErrorInfo = (product) => {
    return `One or more properties ware incomplete or not valid.
        listado de requirimientos de propiedades del user:
        * first_name: needs to a String, received ${user.title}
        * last_name: needs to a String, received ${user.price}
        * email: needs to a String, received ${user.category}`
}