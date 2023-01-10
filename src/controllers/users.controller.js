const UserServices = require('../services/user.services');


const getAllUsers = async(req,res)=>{
    try{
const result = await UserServices.getAll();
res.status(200).json(result);
    }catch(error){
res.status(400).json(error.message);
    }
    res.json({message:'obteniendo todos los usuarios'})
}

const getUserById = async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json(error.message);
    }
  }

const createUser = async(req,res)=>{
    try{
        const newUser =req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result);
    }catch(error){
        res.status(400).json(error.message);
    }
}

const updateUser = (req,res)=>{
    res.json({message:'actualizandolos usuarios'})
}


const deleteUser = (req,res)=>{
    res.json({message:'eliminando usuarios'})
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}

