// const { getAllUsers } = require('../controllers/users.controller');
const Users = require('../models/users.models');//asi nos comunicamos con la carptea de modelos
const Todos = require('../models/todos.models');


class UserServices {
    static async getAll(){//metodos staticos
        try{
            const result = await Users.findAll();
            return result;
        }catch(error){
            throw new error();
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
            // attributes:["username", "email"],//son los atributos que quiero que me traiga de usuarios
            //omite toda la informacion del usuario y me trae el ToDo
            attributes: {
              exclude:["password"],
            },
            include: {//le digo que en la busqueda me incluya la tabla de todos, este include pertenece a la tabla de ToDos
              model: Todos,
              attributes:["title"],
              as: "task",
              // include: {

              // },//se peude hacer otro include, si se necesita
            },
          });
          return result;
        } catch (error) {
          throw error;
        }
      }
    //creando un usuario
      static async create(user){
        try{
          const result = await Users.create(user);
          return result
        }catch(error){
          throw error;
        }
      }
//actualizando usuarios
      static async update(field, id){
        try {
            const result = Users.update(field, {where:{id}});
            return result;
        }catch(error){
            throw error;
        }
      }
      //elinando usuarios
      static async delete(id){
        try{
            const result = Users.destroy({where:{id}});
            return result;
        }catch(error){
            throw error;
        }
      }
}
module.exports = UserServices;