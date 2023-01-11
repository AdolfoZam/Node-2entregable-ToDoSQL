const { getAllUsers } = require('../controllers/users.controller');
const Users = require('../models/users.models');
const Todos = require('../models/todos.models');


class UserServices {

    static async getAll(){
        try{
            const result = await Users.findAll();
            return result;
        }catch(error){
            throw new error;
        }
    }

    static async getById(id) {
        try {
            const result = await Users.findByPk(id);
            return result;        
        }catch(error){
            throw error;
        }
      }

      static async getWithTasks(id) {
        try {
          const result = await Users.findOne({
            where: { id },
            include: {
              model: Todos,
              as: "task",
            },
          });
          return result;
        } catch (error) {
          throw error;
        }
      }
    
      static async create(user){
        try{
            const result = Users.create(user);
            return result;
        }catch(error){
            throw error;
        }
      }

      static async update(id){
        try {
            const result = Users.update({where:{id}});
            return result;
        }catch(error){
            throw error;
        }
      }

    //   static async delete(id){
    //     try{
    //         const result = Users.delete(id);
    //         return result;
    //     }catch(error){
    //         throw error;
    //     }
    //   }
}

module.exports = UserServices;