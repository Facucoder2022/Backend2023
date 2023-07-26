const { userModel } = require("./model/users.model")


class UserManagerMongo {
    constructor() {
		this.userModel = userModel;
	}
    
    async getUsers(){
        try{
            return await userModel.find({})
        }catch(err){
            return new Error(err)
        }
    }
    async getUserById(uid){
        try {            
            return await userModel.findOne({_id: uid})
        } catch (error) {
            return new Error(error)
        }

    }

    async getUserByEmail(pEmail){
        try {            
            return await userModel.findOne({"email": pEmail})
        } catch (error) {
            return new Error(error)
        }

    }
    async addUser(newUser){
        try {
            
            return await userModel.create(newUser)
        } catch (error) {
            return new Error(error)
        }
    }
    async updateUser(pid){}
    async deleteUser(pid){}
}

module.exports = new UserManagerMongo
