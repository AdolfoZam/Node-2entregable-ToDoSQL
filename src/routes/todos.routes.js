const {Router} = require('express');
const { getAllUsers, getUserById } = require('../controllers/users.controller');

const router = Router();
//localhost:8000/todos
//vamos a tener nuestra rutas de los contraoladores
router.get('/todos', (req,res)=>{
res.json({message:'obteniendo los usuarios'})
});

router.get('/todos/:id', (req,res)=>{
    res.json({message:'obteniendo los usuarios por id'})
});

router.post('/todos', (req,res)=>{
    res.json({message:'creando los usuarios'})
});

router.put('/todos/:id',(req,res)=>{
    res.json({message:'actualizando los usuarios'})
});

router.delete('/todos/:id', (req,res)=>{
    res.json({message:'eliminando los usuarios'})
});

module.exports = router;


