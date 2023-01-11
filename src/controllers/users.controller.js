const Users = require('../models/users.models');
const UserServices = require('../services/user.services');

//consulta de los usuarios
const getAllUsers = async(req,res)=>{
    try{
const result = await UserServices.getAll();
res.status(200).json(result);
    }catch(error){
res.status(400).json(error.message);
    }
    res.json({message:'obteniendo todos los usuarios'})
}
//consulta de usuarios por id
const getUserById = async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json(error.message);
    }
  }

  const getUserWithTasks = async(req,res)=>{
    try{
        const {id} = req.params;
        const result = await UserServices.getWithTasks(id);
        res.json(result);//por defecto se respnde 200
    }catch(error){
        res.status(400).json(error.message);
    }
  }
//creacion de usuarios
const createUser = async(req,res)=>{
    try{
        const newUser =req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result);
    }catch(error){
        res.status(400).json(error.message);
    }
}
//actualizacion de usuarios
const updateUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const field = req.body;
        const result = await UserServices.update(field,{
            where:{id},
        });
        res.status(200).json(result);
    }catch(error){
        res.status(400).json(error.message);
    }
}
//elimando usuarios
const deleteUser = async(req,res)=>{
    // try{
    //     const {id} = req.params;
    //     const result = await Users.delete({
    //         where:{id},
    //     });
    //     res.status(200).json(result)
    // }catch (error){
    //     res.status(400).json(error.message)
    // }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}

