const Todos = require('../models/todos.models');//asi nos comunicamos con la carptea de modelos
// const Todos = require('../models/todos.models');
const TodosCategories = require('..//models/todos-categories.models');
const Categories = require('../models/categories.models');

class TodosServices {
    static async getAll(){//metodos staticos
        try{
            const result = await Todos.findAll();
            return result;
        }catch(error){
            throw new error();
        }
    }

    static async getById(id) {
        try {
            const result = await Todos.findByPk(id);
            return result;        
        }catch(error){
            throw error;
        }
      }

    //   static async getWithTasks(id) {
    //     try {
    //       const result = await Users.findOne({
    //         where: { id },
    //         include: {
    //           model: Todos,
    //           as: "task",
    //         },
    //       });
    //       return result;
    //     } catch (error) {
    //       throw error;
    //     }
    //   }
    //creando un usuario
      static async create(todo){
        try{
          const result = await Todos.create(todo);
          return result
        }catch(error){
          throw error;
        }
      }
//actualizando
      static async update(field, id){
        try {
            const result = await Todos.update(field, {where:{id}});
            return result;
        }catch(error){
            throw error;
        }
      }

      static async delete(id){
        try{
            const result = await Todos.destroy({where:{id}});
            return result;
        }catch(error){
            throw error;
        }
      }

      static async getWithCategories (id) {
        try{
          const result = await Todos.findOne({
            where: {id},
          });
          return result;
        }catch (error){
          throw error;
        }
      }

      static async getWithCategories(id){
        try{
          const result = await Todos.findOne({
            where: {id},
            include: {
              model: TodosCategories,
              as: "categories",
              attributes: ["id"],
              include: {
                model: Categories,
                as: "category",
              },
            },
          });
          return result;
        }catch(error){
          throw error;
        }
      }
}
module.exports = TodosServices;