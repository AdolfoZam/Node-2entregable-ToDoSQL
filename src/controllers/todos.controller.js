// const Users = require('../models/users.models');
const TodosServices = require('../services/todos.services');
//consulta de los usuarios
const getAllTodos = async(req, res)=>{
    try{
const result = await TodosServices.getAll();
        res.status(200).json(result);
    }catch(error){
        res.status(400).json(error.message);
    }
 };
//consulta de todos por id
const getTodosById = async(req, res)=>{
    try {
        const {id} = req.params;
        const result = await TodosServices.getById(id);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json(error.message);
    }
  };

//   const getUserWithTasks = async(req, res)=>{
//     try{
//         const {id} = req.params;
//         const result = await UserServices.getWithTasks(id);
//         res.json(result);//por defecto se respnde 200
//     }catch(error){
//         res.status(400).json(error.message);
//     }
//   }
//creacion de todos
const createTodos = async(req, res)=>{
    try{
        const newTodo =req.body;
        const result = await TodosServices.create(newTodo);
        res.status(201).json({
    message:"creando todos",    
    data: result,
    });
    }catch(error){
        res.status(400).json(error.message);
    }
  }
//actualizacion de todos
const updateTodos = async(req, res)=>{
    try{
        const {id} = req.params;
        const field = req.body;
        const result = await TodosServices.update(field,id);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json(error.message);
    }
  }
//eliminando todos
const deleteTodos = async(req, res)=>{
    try{
        const {id} = req.params;
        const result = await TodosServices.delete(id);
        res.status(200).json(result)
    }catch (error){
        res.status(400).json(error.message)
    }
  }
    const getTodosWithCategories = async (req, res) => {
        try {
          const { id } = req.params;//aca nos envian el id de la peticion
          const result = await TodosServices.getWithCategories(id);
          res.json({
            message: "Enviando tareas con categorias actualizadas",
            data: result,
          });
        } catch (error) {
          res.status(400).json({
            error: error.message,
            details: error.stack,
          });
        }
      };
      
module.exports = {
    getAllTodos,
    getTodosById,
    createTodos,
    updateTodos,
    deleteTodos,
    getTodosWithCategories,
}