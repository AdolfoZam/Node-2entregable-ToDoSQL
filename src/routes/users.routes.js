const {Router} = require('express');
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserWithTasks,
} = require('../controllers/users.controller');

const router = Router();
//localhost:8000/users
//vamos a tener nuestro controlador
router.get('/users', getAllUsers);//el segundo parametro es una funcion, toda la linea es un middleware
   //es un enrutador
router.get('/users/:id', getUserById);

//obtener a un usuario con sus tareas
router.get('/users/:id/todos', getUserWithTasks);//esto es un endpoint

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

module.exports = router;
