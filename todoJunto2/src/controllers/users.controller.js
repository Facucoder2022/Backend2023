class UserController {
    getUsers = (req, res)=>{
        try {
            res.send('getUsers')
        } catch (error) {
            console.log(error)
        }
    }
    getUser = (req, res)=>{
        try {
            res.send('getUser')
        } catch (error) {
            console.log(error)
        }
    }
    createUser = (req, res)=>{
        try {
            res.send('createUsers')
        } catch (error) {
            console.log(error)
        }
    }
    updateUser = (req, res)=>{
        try {
            res.send('updateUsers')
        } catch (error) {
            console.log(error)
        }
    }
    deleteUser = (req, res)=>{
        try {
            res.send('deleteUsers')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = {
    UserController
}