const { UserModel } = require("./model/users.model")

class UserDaoMongo { // manager User
    constructor() {
        //  iniciar la base de datos
        this.userModel = UserModel
    }

    get = async (limit=10, page=1)=> await this.userModel.paginate({ },{limit, page, lean: true})
            
    
    async getById(uid){
        return await this.userModel.findOne({_id: uid})
    }
    create = async (newUser)=> {
            return await this.userModel.create(newUser)
    }

    async update(uid, userUpdate){
        return await this.userModel.findOneAndUpdate({_id: uid}, userUpdate)
    }
    async delete(uid){
        return await this.userModel.findOneAndDelete({_id: uid})
    }
}

module.exports = UserDaoMongo


// class UserManagerMongo {
//     constructor() {
// 		this.userModel = userModel;
// 	}
    
//     async getUsers(){
//         try{
//             return await userModel.find({})
//         }catch(err){
//             return new Error(err)
//         }
//     }
//     async getUserById(uid){
//         try {            
//             return await userModel.findOne({_id: uid})
//         } catch (error) {
//             return new Error(error)
//         }

//     }

//     async getUserByEmail(pEmail){
//         try {            
//             return await userModel.findOne({"email": pEmail})
//         } catch (error) {
//             return new Error(error)
//         }

//     }
//     async addUser(newUser){
//         try {
            
//             return await userModel.create(newUser)
//         } catch (error) {
//             return new Error(error)
//         }
//     }
//     async updateUser(pid){}
//     async deleteUser(pid){}
// }

// module.exports = new UserManagerMongo
